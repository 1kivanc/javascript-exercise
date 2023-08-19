
var board;
var cellSize = 25;
var rows = 20;
var cols = 20;
var score = 0;
var context;
var snakeX = cellSize * 10;
var snakey = cellSize * 10;
var foodX ;
var foodY;
var snakeBody = [];
var velocityX=0;
var velocityY=0;
var gameover = false;

window.onload = function() {
    board = document.getElementById("canvas");
    board.width = cols * cellSize;
    board.height = rows * cellSize;
    context = board.getContext("2d");

    createFood();
    document.addEventListener("keyup",changeDirection);

    setInterval(update , 1000/10);
    
}

function update(){
    if(gameover){
        result = document.querySelector(".gameover");
        result.style.display = "flex";
        return;
        
    }
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle = "red";
    context.fillRect(foodX,foodY,cellSize,cellSize);


    if(snakeX == foodX && snakey == foodY){
        score+=5;
        scorelbl= document.querySelector(".score");
        scorelbl.innerHTML= score;
        snakeBody.push([foodX,foodY])
        createFood();
    }

    for(let i = snakeBody.length-1; i>0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0] = [snakeX,snakey];
    }

    context.fillStyle = "lime";

    snakeX += velocityX * cellSize;
    snakey += velocityY * cellSize; 
    context.fillRect(snakeX,snakey,cellSize,cellSize);    
    for( let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0],snakeBody[i][1],cellSize,cellSize)
    }

    if(snakeX < 0 || snakeX > cols*cellSize || snakey < 0 || snakey> rows*cellSize){
        gameover = true;
        
    }

    for(let i = 0 ; i<snakeBody.length ; i++){
        if(snakeX == snakeBody[i][0] && snakey == snakeBody[i][1]){
            gameover =true;
            
        }
    }
   
}

function createFood() {
    foodX = Math.floor(Math.random() * cols) * cellSize;
    foodY= Math.floor(Math.random() * rows) * cellSize;
}


function changeDirection(e){
    if(e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }else if(e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if(e.code == "ArrowRight" && velocityX !=-1){
        velocityX = 1;
        velocityY = 0;
    }

}

