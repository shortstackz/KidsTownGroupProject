// KidsTown School - Word Scramble Game

let gameData = null;
let currentWord = null;
let currentLevel = "easy";
let tries = 0;


// Load the word data from school.json
async function loadGameData() {
    try {
        const response = await fetch("school.json");

        if (!response.ok) {
            throw new Error("Could not load school.json");
        }

        gameData = await response.json();

    } catch (error) {
        console.error(error);

        document.getElementById("message").textContent =
            "Sorry, the game data could not be loaded.";
    }
}


// Randomly choose a word from the selected difficulty
function chooseWord() {

    const words = gameData[currentLevel];

    const randomIndex = Math.floor(Math.random() * words.length);

    currentWord = words[randomIndex];

    tries = 0;

    document.getElementById("tries").textContent = tries;
    document.getElementById("last-guess").textContent = "None";
    document.getElementById("message").textContent = "";

    showScrambledWord();
    showPicture();
}


// Scramble the letters
function scrambleWord(word) {

    const letters = word.toUpperCase().split("");

    let scrambled;

    do {
        scrambled = [...letters];

        for (let i = scrambled.length - 1; i > 0; i--) {

            const randomIndex = Math.floor(Math.random() * (i + 1));

            [scrambled[i], scrambled[randomIndex]] =
                [scrambled[randomIndex], scrambled[i]];
        }

    } while (scrambled.join("") === word.toUpperCase() && word.length > 1);

    return scrambled.join("");
}


// Display the scrambled word
function showScrambledWord() {

    const scrambled = scrambleWord(currentWord.word);

    document.getElementById("scrambled-word").textContent =
        scrambled;
}


// Display the picture
function showPicture() {

    const picture = document.getElementById("picture");

    picture.src = "../../../graphics/school/" +
                  currentWord.graphic;

    picture.alt = "Picture for " + currentWord.word;
}


// Start the game
function startGame() {

    const selectedLevel =
        document.querySelector('input[name="level"]:checked');

    if (!selectedLevel) {
        return;
    }

    currentLevel = selectedLevel.value;

    document.getElementById("level-screen").style.display = "none";

    document.getElementById("game").style.display = "block";

    document.getElementById("result").style.display = "none";

    chooseWord();

    document.getElementById("guess").focus();
}


// Check the player's answer
function checkGuess() {

    const guessInput = document.getElementById("guess");

    const guess = guessInput.value.trim();

    if (guess.length === 0) {

        document.getElementById("message").textContent =
            "Please enter a guess.";

        return;
    }


    // Only allow letters
    if (!/^[a-zA-Z]+$/.test(guess)) {

        document.getElementById("message").textContent =
            "Only use letters for input.";

        guessInput.value = "";

        return;
    }


    // Check that the guess has the correct length
    if (guess.length !== currentWord.word.length) {

        document.getElementById("message").textContent =
            "The answer should be " +
            currentWord.word.length +
            " letters long.";

        guessInput.value = "";

        return;
    }


    tries++;

    document.getElementById("tries").textContent = tries;

    document.getElementById("last-guess").textContent =
        guess.toUpperCase();


    // Correct answer
    if (guess.toLowerCase() === currentWord.word.toLowerCase()) {

        showResult();

    } else {

        document.getElementById("message").textContent =
            "That's not correct. Try again!";

        guessInput.value = "";

        guessInput.focus();
    }
}


// Show the correct-answer screen
function showResult() {

    document.getElementById("game").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("correct-word").textContent =
        currentWord.word.toUpperCase();

    document.getElementById("final-tries").textContent =
        tries;

    document.getElementById("result-picture").src =
        "../../../graphics/school/" +
        currentWord.graphic;

    document.getElementById("result-picture").alt =
        currentWord.word;

    // Highlight the word in the sentence
    const sentence = currentWord.sentence;

    const wordPattern =
        new RegExp("(" + currentWord.word + ")", "gi");

    const highlightedSentence =
        sentence.replace(
            wordPattern,
            "<strong>$1</strong>"
        );

    document.getElementById("result-sentence").innerHTML =
        highlightedSentence;
}


// Play another word at the same level
function playAgain() {

    document.getElementById("result").style.display = "none";

    document.getElementById("game").style.display = "block";

    document.getElementById("guess").value = "";

    chooseWord();

    document.getElementById("guess").focus();
}


// Return to difficulty selection
function changeLevel() {

    document.getElementById("result").style.display = "none";

    document.getElementById("game").style.display = "none";

    document.getElementById("level-screen").style.display = "block";
}


// Button events
document.getElementById("start-button").addEventListener(
    "click",
    startGame
);

document.getElementById("submit-guess").addEventListener(
    "click",
    checkGuess
);

document.getElementById("play-again").addEventListener(
    "click",
    playAgain
);

document.getElementById("change-level").addEventListener(
    "click",
    changeLevel
);


// Allow the Enter key to submit a guess
document.getElementById("guess").addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            checkGuess();
        }

    }
);


// Load the JSON data when the page opens
loadGameData();
