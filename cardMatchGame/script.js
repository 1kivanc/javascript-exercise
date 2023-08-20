var gamemode ;
var cardList = [
    "001",
    "002",
    "003",
    "004",
    "005",
    "006",
    "007",
    "008",
    "009",
    "010",
    "011",
    "012"
]

inGame=[];
let rows;
let cols;
var mistakes = 0;
var success =0;
var successCount = 0;
var cardSet;
var canvas = [];

function choose(gamemode) {
    
    var canvas = document.getElementById("canvas");
    chooseGameMode = document.getElementById("chooseGameMode");
    
    console.log("Seçilen oyun modu: " + gamemode);
    
    if (gamemode == "easy") {
      rows = 2;
      cols = 3;
      for(let i = 0; i<3;i++){
        inGame.push(cardList[i]);
      }
        canvas.style.width= "435px";
        canvas.style.height="300px" ;
        success=3;
    } else if (gamemode == "normal") {
      rows = 3;
      cols = 4;
      for(let i = 0; i<6;i++){
        inGame.push(cardList[i]);
      }
        canvas.style.width= "565px";
        canvas.style.height="430px" ;
        success=6
    } else if (gamemode == "hard") {
      rows = 4;
      cols = 6;
      for(let i = 0; i<12;i++){
        inGame.push(cardList[i]);
      }
      success=12;
      
    }
    canvas.style.display = "flex";
    chooseGameMode.style.display ="none";
    document.querySelector("h2").style.display="flex";
  
    // kartları karıştır
    mixCards();
    // oyunu başlat
    startGame();
  }



var select1; 
var select2;

function mixCards(){
   
    cardSet = inGame.concat(inGame);
    console.log(cardSet);
    for(let i = 0; i<cardSet.length ; i++){
        let j = Math.floor(Math.random() * cardSet.length);

        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;

    }
    console.log(cardSet);
}

function startGame(){
    for(let i = 0; i < rows ; i++){
        let row=[];
        for(let j = 0; j<cols ; j++){
            let cardImg = cardSet.pop();
            row.push(cardImg);

            let card = document.createElement("img");
            card.id = i.toString() + "-" + j.toString();
            card.src= "images/"+cardImg+".jpg";
            card.classList.add("card");
            card.classList.add("flip-vertical-left");
            card.addEventListener("click",selectCard);
            document.getElementById("canvas").append(card);
        }
        canvas.push(row);
    }
    console.log(canvas);
    setTimeout(hideCards,2000);
}

function hideCards() {
    for(let i = 0 ; i<rows; i++){
        for(let j =0 ; j<cols ; j++){
            let card = document.getElementById(i.toString() + "-" + j.toString());
            card.src="back.png";
            card.classList.add("flip-vertical-left");
        }
    }
}

function selectCard(){
    if(this.src.includes("back")){
        if(!select1){
            select1 = this;

            let cordinate = select1.id.split("-");
            r = parseInt(cordinate[0]);
            c = parseInt(cordinate[1]);

            select1.src = "images/"+canvas[r][c] + ".jpg";
        }
        else if(!select2 && this != select1){
            select2 = this;

            let cordinate = select2.id.split("-");
            r = parseInt(cordinate[0]);
            c = parseInt(cordinate[1]);

            select2.src = "images/" + canvas[r][c] + ".jpg";

            setTimeout(update,2000);
        }
    }
}
function update(){
  
    if(select1.src != select2.src){
        select1.src = "back.png";
        select2.src = "back.png";
        mistakes += 1;
        document.getElementById("mistakes").innerText = "Mistakes: "+mistakes;
    }
    else if(select1.src == select2.src){
        successCount++;
        if(successCount == success){
            alert("Congratulations");
            window.location.reload();
        }

    }
    select1 = null;
    select2 = null;
   
}

