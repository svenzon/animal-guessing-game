var numGuesses = 0;
var question = "";
var messageDisplay = document.querySelector("#questionDisplay");
var initQuestions = ["Is it a cat?", "Is it a dog?", "Is it a fish?"];

init();

function init() {
    var randomItem = initQuestions[Math.floor(Math.random()*initQuestions.length)];
    question = randomItem;
    messageDisplay.innerHTML = question;
}

if (numGuesses >= 20) {
    question = "What animal did you think of?";
}