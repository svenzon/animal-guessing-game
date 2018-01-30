var AnimalHandler = require("../buildScripts/server");

var stdQuestion = `Is the animal ${fromDB}?`;
var finalGuess = "";
var finalQuestion = `Are you thinking of a ${finalGuess}?`;
var userInput = "";

var msgDisplay = document.querySelector("#questionDisplay");
var animalInput = document.querySelector("#inputAnimal");
var yesBtn = document.querySelector("#yesBtn");
var noBtn = document.querySelector("#noBtn");

//adds necessary eventlisteners
function init() {
    yesBtn.addEventListener("click", function () {
        AnimalHandler.find({}, { _id: 0, name: 1 }, function(err, docs){
            console.log(docs);
        });
        //check answer and compare to db
    });

    noBtn.addEventListener("click", function () {
        //check answer and compare to db
    });
}

init();

function showAnimal() {
    msgDisplay.textContent = `Are you thinking of a ${initAnimal}?`;
}

function checkAnswer(answer) {
    //check if player answered "yes" or "no"
}

function checkGuess() {
    //check the number of questions asked
    //change question, remove buttons and show input field
    //note: move to separate function
    question = `What animal did you think of?`;
    msgDisplay.innerHTML = question;
    yesBtn.classList.toggle("unavailable");
    noBtn.classList.toggle("unavailable");
    animalInput.classList.toggle("available");
}

function newAnimal() {
    //use player input to create a new animal and insert into db
    console.log(animalInput.value);
}