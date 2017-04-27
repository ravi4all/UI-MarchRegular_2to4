window.addEventListener("DOMContentLoaded",init);

function init(){
    a = document.getElementById("task");
    b = document.getElementById("desc");
    document.getElementById("add").addEventListener("click",addTask);
}

function addTask(){
    ul = document.getElementById("taskList");
    li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = a.value + " " + b.value;
}