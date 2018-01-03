var numGuesses = 0;
var question = "";
var initAnimal = "cat";

var messageDisplay = document.querySelector("#questionDisplay");
var buttons = document.querySelectorAll("button");
var yesBtn = document.querySelector("#yesBtn");
var noBtn = document.querySelector("#noBtn");

init();

function init() {
    question = `Are you thinking of a ${initAnimal}?`;
    messageDisplay.innerHTML = question;
}

function checkAnswer(answer) {
    //funktion som kollar om spelaren svarat ja eller nej
}

function checkNumGuesses(numGuesses) {
    //kontrollera hur många frågor som ställts
    if (numGuesses >= 20) {
        //ändra frågan och låt spelaren skriva in djuret
        question = `What animal did you think of?`;
        buttons.style.classList = "inactive";
    }
}

function newAnimal(playerInput) {
    //ta spelarens input och skapa ett nytt djur
}