/*-------------- Constants -------------*/

const wordList = [
    {word: "tiger",},
    {word: "cat",},
    {word: "bear",},
    {word: "dog",},
    {word: "swan",},
]

const maxAttempts = 5;

/*---------- Variables (state) ---------*/

let currentLetter;
let currentWord;
let incorrectAttempts = 0;
let correctLetters = [];

/*----- Cached Element References  -----*/

const keyboardEl = document.querySelector(".keyboard");
const displayWordEl = document.querySelector(".displayWord");
const imgEl = document.querySelector(".img");
const playAgainEl = document.querySelector(".playAgain");
const model = document.querySelector(".model");
const guessEl = document.querySelector("#guess");

/*-------------- Functions -------------*/

for(let i=97 ; i<=122 ; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardEl.appendChild(button); 
    button.addEventListener('click', (event) => {
        event.target.innerText = String.fromCharCode(i);
        currentLetter = event.target.innerText;
        button.disabled = true;
        init();
    });
};

const reset = () => {
    correctLetters = [];
    incorrectAttempts = 0;
    model.classList.add("hidden");
    guessEl.innerText = `${incorrectAttempts} / ${maxAttempts}`;
    keyboardEl.querySelectorAll("button").forEach(button => button.disabled = false);
}

const getRandom = () => {
    model.classList.add("hidden");
    const {word} = wordList[Math.floor(Math.random()* wordList.length)];
    currentWord = word;
    imgEl.innerHTML += `<img id="${word}" class="hidden" src="${word}.jpg">`;
    reset();
    displayWordEl.innerHTML = word.split("").map(()=>`<li class="letter"></li>`).join("");
};

const gameOver = (win) => {
    
        if (win === true) {
            const text = 'You found the word:';
            model.querySelector("img");
            model.innerText = 'Congratulations!';
            model.innerHTML = `${text} <b>${currentWord}</b>`;
            model.classList.remove("hidden");
        } else if (win === false) {
            const text1 = 'The correct word is:';
            model.querySelector("img");
            model.querySelector("h4").innerText = 'GAME OVER!!!';
            model.querySelector("p").innerHTML = `${text1} <b>${currentWord}</b>`;
            model.classList.remove("hidden");
        }
    
}

const init = () => {
    if(currentWord.includes (currentLetter)) {
        console.log(`${currentLetter} exist in word`);
        [...currentWord].forEach((letter, index) => {
            if(letter === currentLetter) {
                correctLetters.push(currentLetter);
                displayWordEl.querySelectorAll("li")[index].innerText = letter;
                displayWordEl.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        incorrectAttempts++;
        console.log(`${currentLetter} does not exist in word`);
    };
  
    guessEl.innerText = `${incorrectAttempts} / ${maxAttempts}`;
    if (correctLetters.length === currentWord.length) {
        gameOver(true);
    }
};

 getRandom();


/*----------- Event Listeners ----------*/

playAgainEl.addEventListener('click', getRandom);
