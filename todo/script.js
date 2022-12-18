const form = document.querySelector("#todoForm");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const addInput = document.querySelector("#addTodo");
const card = document.querySelector(".card");
const allDelete = document.querySelector("#allDelete");
let todos  = [];

runEvents();

function runEvents() {
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    list.addEventListener("click",removeTodo);
    allDelete.addEventListener("click",allTodosDelete);
}

function pageLoaded () {
    checkTodosFromStorage();
    todos.forEach((todo) => {
        addTodoUi(todo);
    })
}

function allTodosDelete(){
    const todoList = document.querySelectorAll("li");
    if(todoList.length >0){
            todoList.forEach((todo) => {
                todo.remove();
            });

            todos = [];
            localStorage.setItem("todos",JSON.stringify(todos));
            showAlert("success","Todo silindi");
    }

    else {
        showAlert("warning","silmek için kayıtlı herhangi bir todo yok");
    }
    console.log(todoList);
}

function removeTodo(e){
    if(e.target.className === "fa fa-remove"){
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        removeTodoToStorage(todo.textContent);
        showAlert("success","Todo silindi");
    }
}

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach((todo,index) => {
        if(removeTodo === todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function addTodo (e){
    const inputText = addInput.value.trim();
    if(inputText == null || inputText == ""){
        showAlert("warning","lütfen boş bırakmayınız");

    }
    else {
        addTodoUi(inputText);
        addTodosToStorage(inputText);    
        showAlert("success","Todo ekleme başarılı");
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

function addTodosToStorage (addStorage) {
    checkTodosFromStorage();
    todos.push(addStorage);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function checkTodosFromStorage(){
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type,message){
  const div = document.createElement("div");
  div.className=`alert alert-${type}`
  div.textContent = message;

  card.appendChild(div);
  setTimeout(() => {
        div.remove();
  },1000);
}