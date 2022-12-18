const form = document.querySelector("#todoForm");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const addInput = document.querySelector("#addTodo");

runEvents();

function runEvents() {
    form.addEventListener("submit",addTodo);
}

function addTodo (e){
    const inputText = addInput.value.trim();
    if(inputText == null || inputText == ""){
        alert("Lütfen geçerli bir değer giriniz");
    }
    else {
        addTodoUi(inputText);    
    }
    e.preventDefault();
}

function addTodoUi(newTodo){

    const li = document.createElement("li");
    li.className = "";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className ="";

    const i = document.createElement("i");
    i.className = "fa fa-remove"

    a.appendChild(i);
    li.appendChild(a);
    list.appendChild(li);

    addInput.value = "";
}