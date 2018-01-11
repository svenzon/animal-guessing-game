var numGuesses = 0;
var question = "";
var initAnimal = "cat";
var initQuestion = `Are you thinking of a ${initAnimal}?`;
var userInput = "";

var messageDisplay = document.querySelector("#questionDisplay");
var yesBtn = document.querySelector("#yesBtn");
var noBtn = document.querySelector("#noBtn");
var animalInput = document.querySelector("#inputAnimal");

var requestURL = 'https://github.com/svenzon/animal-guessing-game/blob/master/json/animals.json';

//self-invoking function which adds necessary eventlisteners
(function init () {
    yesBtn.addEventListener("click", function(){
        numGuesses++;
        checkNumGuesses(numGuesses);
    });

    noBtn.addEventListener("click", function (){
        numGuesses++;
        checkNumGuesses(numGuesses);
    });

    //getJSON();
}());

function getJSON() {
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        let animals = request.response;
        console.log(animals);
    }
}

function checkAnswer(answer) {
    //check if player answered 'yes' or 'no'
}

function checkNumGuesses(numGuesses) {
    //check the number of questions asked
    if (numGuesses >= 5) {
        //change question, remove buttons and show input field
        //note: move to separate function
        question = `What animal did you think of?`;
        messageDisplay.innerHTML = question;
        yesBtn.classList.toggle("inactive");
        noBtn.classList.toggle("inactive");
        animalInput.classList.toggle("inactive");
    }
}

function newAnimal() {
    //use player input to create a new animal
    userInput = animalInput.value;
}