let inputNum = document.querySelector(".inputNum");
let buttons = document.querySelectorAll(".btn");
let equal= document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");

        buttons.forEach(function(button){
            button.addEventListener("click",function(e){
                let val = e.target.dataset.num;
                inputNum.value += val;
            })
        })

        equal.addEventListener("click", function(e) {
            if(inputNum.value === " "){
                inputNum.value = " ";
            }else{
                let answer = eval(inputNum.value);
                inputNum.value = answer;
            }
            

        })
        clear.addEventListener("click",function(e){
            inputNum.value = " ";
        })

        



