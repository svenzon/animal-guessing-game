var numGuesses = 0;
var question = "";
var initAnimal = "cat";

var messageDisplay = document.querySelector("#questionDisplay");
var yesBtn = document.querySelector("#yesBtn");
var noBtn = document.querySelector("#noBtn");
var animalInput = document.querySelector("#inputAnimal");

init();

function init() {
    messageDisplay.innerHTML = `Are you thinking of a ${initAnimal}?`;

    noBtn.addEventListener("click", function(){
        numGuesses++;
        checkNumGuesses(numGuesses);
    });

    animalInput.addEventListener('invalid', function(e){
        if(animalInput.validity.valueMissing){
            e.target.setCustomValidity("Hey, gimme something to work with here!");
        }
    });
}

function checkAnswer(answer) {
    //check if player answered 'yes' or 'no'
}

function checkNumGuesses(numGuesses) {
    //check the number of questions asked
    if (numGuesses >= 5) {
        //change question, remove buttons and show input field
        question = `What animal did you think of?`;
        messageDisplay.innerHTML = question;
        yesBtn.classList.toggle("inactive");
        noBtn.classList.toggle("inactive");
        animalInput.classList.toggle("inactive");
    }
}

function newAnimal(playerInput) {
    //use player input to create a new animal
}