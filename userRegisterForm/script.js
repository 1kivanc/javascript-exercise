const form = document.getElementById('form')
const username = document.getElementById('userName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2= document.getElementById('password2')

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ""){
        const formControl = username.parentElement
        formControl.className = "form-control error";
        const small = formControl.querySelector("small")
        small.innerText = "This field is required"
    }else{
        const formControl = username.parentElement
        formControl.className = "form-control success";
    }

    checkRequired(username)
})
