document.addEventListener("DOMContentLoaded", function () {
const quiz = document.getElementById("libraryQuiz");

```
if (!quiz) {
    return;
}

quiz.addEventListener("submit", function (event) {
    event.preventDefault();

    const answer1 = quiz.elements["TOPIC1"].value;
    const answer2 = quiz.elements["TOPIC2"].value;
    const answer3 = quiz.elements["TOPIC3"].value;
    const answer4 = quiz.elements["TOPIC4"].value;
    const answer5 = quiz.elements["TOPIC5"].value;

    if (
        answer1 === "" ||
        answer2 === "" ||
        answer3 === "" ||
        answer4 === "" ||
        answer5 === ""
    ) {
        alert("Please answer all five questions before clicking Learn More!");
        return;
    }

    const correctAnswers = {
        TOPIC1: "Empire State Building",
        TOPIC2: "Madison Square Garden",
        TOPIC3: "Giovanni da Verrazano",
        TOPIC4: "Manhattan",
        TOPIC5: "About 20 million"
    };

    let score = 0;

    if (answer1 === correctAnswers.TOPIC1) {
        score++;
    }

    if (answer2 === correctAnswers.TOPIC2) {
        score++;
    }

    if (answer3 === correctAnswers.TOPIC3) {
        score++;
    }

    if (answer4 === correctAnswers.TOPIC4) {
        score++;
    }

    if (answer5 === correctAnswers.TOPIC5) {
        score++;
    }

    alert(
        "You got " +
        score +
        " out of 5 questions correct!"
    );
});
```

});
