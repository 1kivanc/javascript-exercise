const form = document.getElementById('form')
const username = document.getElementById('userName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2= document.getElementById('password2')

function showError(input,msg){
    const formControl = input.parentElement
        formControl.className = "form-control error";
        const small = formControl.querySelector("small")
        small.innerText = msg

}

function showSuccess(input){
        const formControl = input.parentElement
        formControl.className = "form-control success";
}

function checkRequired(inputArray){
    inputArray.forEach(input => {
        if(input.value.trim() === ""){
            showError(input, `${input.id} is Required!`)
        }
        else{
            showSuccess(input)
        }
    })
}
function checkLengths(input,min,max){
    if(input.value.length < min){
        showError(input,`${input.id} mast be at least ${min} characters`)

    }else if(input.value.length > max){
        showError(input ,`${input.id} mast be at most ${max} characters.`)

    }
}

function checkEmail(input) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())){
        showSuccess(input)
    }else {
        showError(input, "Email is not vaild!")
    }

}
function inPasswordsMatch(p1,p2){
    if(p1.value != p2.value){
        showError(p2, "The Passwords do not match!")
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2])
    checkLengths(username,4,25)
    checkLengths(password, 6,20)
    checkEmail(email)

    inPasswordsMatch(password,password2)
})
