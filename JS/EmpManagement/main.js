window.addEventListener("DOMContentLoaded",init);

var a;
var b;
var c;

function init() {
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    c = document.getElementById("box_3");
    
    document.getElementById("add").addEventListener("click", validation);
}

function addEmp(){
    ul = document.getElementById("list");
    li = document.createElement('li');
    
    ul.appendChild(li);
    
    li.innerHTML = a.value + " " + b.value + " " + c.value;
}

function validation(){
    err_1 = document.getElementById("error_1");
    err_2 = document.getElementById("error_2");
    err_3 = document.getElementById("error_3");
    common_error = document.getElementsByClassName("common_error")
    if(a.value == ""){
        err_1.innerHTML = "Cannot leave this field blank";
    }
    else if(isNaN(a.value)){
        err_1.innerHTML = "Only numbers are allowed";
    }
    else if(!isNaN(c.value)) {
        err_3.innerHTML = "Numbers are not allowed"
    }
    else if(b.value == ""){
        err_2.innerHTML = "Cannot leave this field blank"
    }
    else {
        err_1.innerHTML = "";
        err_2.innerHTML = "";
        err_3.innerHTML = "";
        addEmp();
    }
}