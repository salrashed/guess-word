/*-------------- Constants -------------*/

const words = [ "tiger","cat","bear","dog","swan"];
const inputs = document.querySelector(".inputs"),
wrongLetter = document.querySelector(".wrong-letter span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");

/*---------- Variables (state) ---------*/

var currentWordIndex = 0;
var attempts = 0;
var guessedLetters = [];
var wins = 0;
var losses = 0;

/*----- Cached Element References  -----*/


const hidden =document.querySelector(".hidden");




let word, maxGuesses, incorrectLetters = [], correctLetters = [];

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

function init (){
};

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

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }


/*----------- Event Listeners ----------*/

startButton.addEventListener("click", (e) => {
    console.log(this.className); 
    console.log(e.currentTarget === this); 
  });
  