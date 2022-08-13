const inputs = document.querySelector(".inputs");
const image = document.querySelector(".image");
const retryBtn = document.querySelector(".retry-button");
const hint = document.querySelector(".hint span");
const documentInput = document.querySelector(".documentInput");
const wrongLetter = document.querySelector(".wrong-letter span");
const guesses = document.querySelector(".Guesses span");

let word , incorrect = [] , correct= [] , maxGuesses;

function randomWord() {
    let randWord =  wordData[Math.floor(wordData.length * Math.random())];
    word = randWord.word;
    let img = randWord.img;
    maxGuesses = 3; correct = [] ; incorrect = [];
    guesses.innerText = maxGuesses;
    hint.innerText = randWord.hint;
    wrongLetter.innerText = incorrect;
    retryBtn.classList.remove("gameover");
    let html = "";

    let images = `<img src=${img} />`;
    image.innerHTML = images;

    for(let i=0 ; i < word.length ; i++){
        html += `<input type="text" class="inputText" disabled>`;
    }
    inputs.innerHTML = html;
}
randomWord();

function gameInit(e){
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !incorrect.includes(` ${key} `) && !correct.includes(key)){
       
        if(word.includes(key)){
            
            for(let i=0 ; i< word.length ; i++){
                if(word[i] === key){
                    correct.push(key)
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }

        }else {
            maxGuesses--;
            incorrect.push(` ${key} `);
        }
        guesses.innerText = maxGuesses;
        wrongLetter.innerText = incorrect;
    }
    documentInput.value = "";
    
    setTimeout(() => {
        if(correct.length === word.length){
            randomWord();
        }
    
        else if(maxGuesses <1) {
            retryBtn.classList.add("gameover"); 
            for(let i= 0; i < word.length ; i++){
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    });
}




retryBtn.addEventListener('click', randomWord);
document.addEventListener("keydown" , () => documentInput.focus());
documentInput.addEventListener("input", gameInit)
