import css from './index.css';

var fromDB = '';
var stdQuestion = `Is the animal ${fromDB}?`;
var finalGuess = "";
var finalQuestion = `Are you thinking of a ${finalGuess}?`;
var userInput = "";

var btnClicks = 0;

var msgDisplay = document.querySelector("#questionDisplay");
var yesBtn = document.querySelector("#yesBtn");
var noBtn = document.querySelector("#noBtn");
var animalInput = document.querySelector("#inputAnimal");

init();

//adds necessary eventlisteners
function init () {
    yesBtn.addEventListener("click", function(){
        console.log("yes");
        //check answer and compare to db        
    });

    noBtn.addEventListener("click", function (){
        console.log("no");
        //check answer and compare to db
    });
};

function showAnimal () {
    msgDisplay.textContent = `Are you thinking of a ${initAnimal}?`;   
}

function checkAnswer(answer) {
    //check if player answered 'yes' or 'no'
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