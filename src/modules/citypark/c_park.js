// citypark.js
// Converted from scripts/citypark/main.pl (name-entry form) and
// scripts/citypark/page.pl (story renderer) + data/citypark/page1-18.
// citypark.json holds the story text and choices; this file holds all
// behavior, including a real navigation history so "Back" always
// returns to wherever the visitor actually came from — the original
// Perl passed a "from" parameter on every link to do the same thing.

const IMAGE_BASE = "../../../graphics/citypark/";

let STORY = null;
let visitorName = "My friend";
let history = []; // stack of previously visited page numbers (or "intro")

const introScreen = document.getElementById("intro");
const storyScreen = document.getElementById("story");
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const introText = document.getElementById("introText");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const choicesEl = document.getElementById("choices");
const backBtn = document.getElementById("backBtn");
const restartBtn = document.getElementById("restartBtn");

async function init() {
  const res = await fetch("citypark.json");
  STORY = await res.json();
  introText.textContent = STORY.intro.text;

  nameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    visitorName = nameInput.value.trim() || "My friend";
    history = ["intro"];
    showPage(1);
  });

  backBtn.addEventListener("click", () => {
    const prev = history.pop();
    if (prev === "intro" || prev === undefined) {
      showIntro();
    } else {
      renderPage(prev, false);
    }
  });

  restartBtn.addEventListener("click", showIntro);
}

function showIntro() {
  storyScreen.style.display = "none";
  introScreen.style.display = "block";
}

function showPage(pageNum) {
  renderPage(pageNum, true);
}

// pushToHistory: true when arriving via a story choice (so Back can
// return here); false when arriving via the Back button itself.
function renderPage(pageNum, pushToHistory) {
  const page = STORY.pages[pageNum];
  if (!page) {
    storyText.innerHTML = "<p>That part of the journey hasn't been written yet.</p>";
    choicesEl.innerHTML = "";
    return;
  }

  introScreen.style.display = "none";
  storyScreen.style.display = "block";
  storyTitle.textContent = `${visitorName}'s Big Journey`;

  storyText.innerHTML = renderText(page.text);
  renderChoices(page, pageNum);

  restartBtn.style.display = page.end ? "inline-block" : "none";
  backBtn.style.display = page.end ? "none" : "inline-block";
}

// Replaces {{name}} and {{img:file:WxH:align}} tokens with real markup.
// Keeping these as tokens in the JSON (rather than baked HTML/paths)
// means citypark.json never needs to know where images are served
// from — only IMAGE_BASE above does.
function renderText(text) {
  return text
    .replaceAll("{{name}}", escapeHtml(visitorName))
    .replace(/\{\{img:([^:]+):(\d+)x(\d+):(left|right)\}\}/g, (_, file, w, h, align) => {
      const floatStyle = align === "left" ? "float:left;margin:0 12px 8px 0;" : "float:right;margin:0 0 8px 12px;";
      return `<img src="${IMAGE_BASE}${file}" width="${w}" height="${h}" style="${floatStyle}" alt="">`;
    })
    .split("\n\n")
    .map((para) => `<p>${para.replace(/\n/g, "<br>")}</p>`)
    .join("");
}

// The only place history is ever pushed: right when a choice is
// clicked, recording the page just left so "Back" can return to it —
// this reproduces the original's dynamic #from# parameter without
// needing a fixed "back" pointer per page.
function renderChoices(page, pageNum) {
  choicesEl.innerHTML = "";
  page.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.label;
    btn.addEventListener("click", () => {
      history.push(pageNum);
      renderPage(choice.next, false);
    });
    choicesEl.appendChild(btn);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

init();