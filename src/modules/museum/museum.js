// museum.js
// Converted from scripts/museum/wizard.pl + data/museum/ss1.dat (Basic)
// and ss2.dat (Advanced). museum.json holds just the question data;
// this file holds all the behavior.

// Single source of truth for where museum images live. If this module
// ever moves, only this line needs to change — museum.json never
// stores a path, just a filename.
const IMAGE_BASE = "../../../graphics/museum/";

let TOURS = null;
let currentTour = [];
let index = 0;
let score = 0;
let answered = false;

const tourSelect = document.getElementById("tourSelect");
const quiz = document.getElementById("quiz");
const doneScreen = document.getElementById("done");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

async function init() {
  const res = await fetch("museum.json");
  TOURS = await res.json();

  document.querySelectorAll("#tourSelect button").forEach((btn) => {
    btn.addEventListener("click", () => startTour(btn.dataset.tour));
  });
  nextBtn.addEventListener("click", goToNextQuestion);
  restartBtn.addEventListener("click", () => {
    doneScreen.style.display = "none";
    tourSelect.style.display = "block";
  });
}

function startTour(name) {
  currentTour = TOURS[name];
  index = 0;
  score = 0;
  tourSelect.style.display = "none";
  doneScreen.style.display = "none";
  quiz.style.display = "block";
  showQuestion();
}

function showQuestion() {
  answered = false;
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";
  const q = currentTour[index];
  questionEl.textContent = `Question ${index + 1} of ${currentTour.length}: ${q.question}`;

  answersEl.innerHTML = "";
  q.answers.forEach((ans) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    // FIX: no text label before the answer is picked — the original
    // game showed four bare images only, so guessing from a text hint
    // wasn't possible. Showing part of the explanation up front let
    // players spot the correct answer without playing.
    btn.innerHTML = `<img src="${IMAGE_BASE}${ans.image}" alt="Answer option">`;
    btn.addEventListener("click", () => handleAnswer(ans, btn));
    answersEl.appendChild(btn);
  });

  scoreEl.textContent = `Score: ${score} / ${index}`;
}

function handleAnswer(ans, btn) {
  if (answered) return;
  answered = true;

  if (ans.correct) {
    btn.classList.add("correct");
    feedbackEl.textContent = "Correct! " + ans.text;
    score++;
  } else {
    btn.classList.add("incorrect");
    feedbackEl.textContent = "Not quite — " + ans.text;
  }

  // FIX: update the score display immediately, not just on the next
  // question, so feedback and score always agree on screen.
  scoreEl.textContent = `Score: ${score} / ${index + 1}`;

  nextBtn.style.display = "inline-block";
  nextBtn.textContent = index + 1 < currentTour.length ? "Next Question →" : "See Results";
}

function goToNextQuestion() {
  index++;
  if (index < currentTour.length) {
    showQuestion();
  } else {
    quiz.style.display = "none";
    doneScreen.style.display = "block";
    document.getElementById("finalScore").textContent =
      `You got ${score} out of ${currentTour.length} correct.`;
  }
}

init();