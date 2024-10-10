/*-------------- Constants -------------*/

const words = [ "tiger","cat","bear","dog","swan"];
const inputs = document.querySelector(".inputs")
const wrongLetter = document.querySelector(".wrong-letter span")
const typingInput = document.querySelector(".typing-input");
const startButton = document.querySelector("#start");
const submitContainer = document.querySelector("#submit-reset-container");
const tiger = document.querySelector("#tiger");
const cat = document.querySelector("#cat");
const bear = document.querySelector("#bear");
const dog = document.querySelector("#dog");
const swan  = document.querySelector("#swan");

/*---------- Variables (state) ---------*/

var currentWordIndex = 0;
var attempts = 0;
var guessedLetters = [];
var wins = 0;
var losses = 0;
let word = []
let maxGuesses = [];
let incorrectLetters = [];
let correctLetters = [];

/*----- Cached Element References  -----*/

const handleAddComment = (event) => {
    if (!inputEl.value) {
      return;
    }}

/*-------------- Functions -------------*/

function gameLose() {
    
    document.getElementById('youLose').style.display = 'block';
    document.getElementById("correctWordWas").innerHTML = "The correct word was " + word;
}
function gameWin() {
    
    document.getElementById('youWin').style.display = 'block';
}
function restart() {
    
    document.getElementById('youLose').style.display = 'none';
    document.getElementById('youWin').style.display = 'none';
}



function firstWord() {
    let
    return (currentWordLetters().map(function (letter) {
        if (guessedLetters.indexOf(letter) === -1) {
            return "_";
        } else {
            return letter;
        }
    }
    ));}

function wordStart() {
    var wordLength = word.length;
    var wordL_ = "";
    var count = wordLength;
    while (count > 0) {
            wordGuess.push("<div class='wordBlocks'></div>");
        count -= 1;
    }
}

function goToNextWord() {
    currentWordIndex++;
    attempts = 0;
    guessedLetters = [];
    updateDisplay();
}

let html = "";
for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
    inputs.innerHTML = html;
}

/*----------- Event Listeners ----------*/

startButton.addEventListener("click", (e) => {
    submitContainer.classList.remove("hidden");
   tiger.classList.remove("hidden");
    startButton.classList.add("hidden");
});

submitContainer.addEventListener("click", (e) => {
        if (e.target.id === "submit") {
        if (typingInput.value === word) {
                gameWin();
                goToNextWord();
            } else {
                attempts++;
                if (attempts === 10) {
                    gameLose();
                    goToNextWord();
                }
            }
        } else if (e.target.id === "reset") {
            restart();
            goToNextWord();
        
    tiger.classList.add("hidden");
    cat.classList.remove("hidden");
}});

submitContainer.addEventListener("click", (e) => {
    if (e.target.id === "submit") {
    if (typingInput.value === word) {
            gameWin();
            goToNextWord();
        } else {
            attempts++;
            if (attempts === 10) {
                gameLose();
                goToNextWord();
            }
        }
    } else if (e.target.id === "reset") {
        restart();
        goToNextWord();
    
cat.classList.add("hidden");
bear.classList.remove("hidden");
}});

submitContainer.addEventListener("click", (e) => {
    if (e.target.id === "submit") {
    if (typingInput.value === word) {
            gameWin();
            goToNextWord();
        } else {
            attempts++;
            if (attempts === 10) {
                gameLose();
                goToNextWord();
            }
        }
    } else if (e.target.id === "reset") {
        restart();
        goToNextWord();
    
bear.classList.add("hidden");
dog.classList.remove("hidden");
}});

submitContainer.addEventListener("click", (e) => {
    if (e.target.id === "submit") {
    if (typingInput.value === word) {
            gameWin();
            goToNextWord();
        } else {
            attempts++;
            if (attempts === 10) {
                gameLose();
                goToNextWord();
            }
        }
    } else if (e.target.id === "reset") {
        restart();
        goToNextWord();
    
dog.classList.add("hidden");
swan.classList.remove("hidden");
}});