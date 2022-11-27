let number = document.getElementById("number");
let guessBtn = document.getElementById("btnGuess");
let result = document.getElementById("result");

let randomNumber = Math.floor(Math.random()*10+1);
console.log(randomNumber);

guessBtn.addEventListener("click",()=> {
    var convert = number.value;

    if(convert=="")
    {
        result.innerText = "you did not enter a value";
        result.style.backgroundColor="red"
        result.style.fontSize = "25px";
    }
    else if(convert<randomNumber){
        result.innerText = "small value";
        result.style.color="blue"
        result.style.fontSize = "25px";

    }else if(convert > randomNumber)
    {
        result.innerText = "bigger value";
        result.style.color="orange"
        result.style.fontSize = "25px";
    }else {
        result.innerText = "Your guess is correct";
        result.style.color="green"
        result.style.fontSize = "25px";

    }

})