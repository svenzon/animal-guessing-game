import css from './index.css';

var fromDB = '';
var stdQuestion = `Is the animal ${fromDB}?`;
var finalGuess = "";
var finalQuestion = `Are you thinking of a ${finalGuess}?`;
var userInput = "";

var msgDisplay = document.querySelector("#questionDisplay");
var yesBtn = document.querySelector("#yesBtn");
var noBtn = document.querySelector("#noBtn");
var animalInput = document.querySelector("#inputAnimal");

var requestURL = './json/animals.json';

//self-invoking function which adds necessary eventlisteners
//and opens database connection
(function init () {
    yesBtn.addEventListener("click", function(){
        console.log("yes");
        //check answer and compare to JSON        
    });

    noBtn.addEventListener("click", function (){
        console.log("no");
        //check answer and compare to JSON
    });

}());

// function getJSON() {
//     let request = new XMLHttpRequest();
//     request.open('GET', requestURL);
//     request.responseType = 'json';
//     request.send();

//     request.onload = function() {
//         let allAnimals = request.response;
//         showAnimal(allAnimals);
//     }
// }

function showAnimal (jsonObj) {
    let animals = jsonObj["animals"];
    msgDisplay.textContent = `Are you thinking of a ${initAnimal}?`;   
}

function checkAnswer(answer) {
    //check if player answered 'yes' or 'no'
}

function checkGuess() {
    //check the number of questions asked
    //if (no alternatives left) {
        //change question, remove buttons and show input field
        //note: move to separate function
        question = `What animal did you think of?`;
        msgDisplay.innerHTML = question;
        yesBtn.classList.toggle("inactive");
        noBtn.classList.toggle("inactive");
        animalInput.classList.toggle("inactive");
    //}
}

function newAnimal() {
    //use player input to create a new animal
}