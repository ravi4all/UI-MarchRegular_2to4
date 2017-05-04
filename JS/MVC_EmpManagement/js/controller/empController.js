window.addEventListener("DOMContentLoaded", init);

var emp_id;
var emp_name;
var emp_dept;
var search_id;

function init(){
    emp_id = document.getElementById("box_1");
    emp_name = document.getElementById("box_2");
    emp_dept = document.getElementById("box_3");
    search_id = document.getElementById("box_4");
    
    document.getElementById("add").addEventListener("click",add);
    document.getElementById("delete").addEventListener("click",deleteEmp);
    document.getElementById("save").addEventListener("click",save);
    document.getElementById("load").addEventListener("click",load);
  document.getElementById("box_4").addEventListener("keypress",searchEmp);
    /*document.getElementById("searchEmp").addEventListener("click",searchEmp);*/
}

function add(){
    ul = document.getElementById("list");
    li = document.createElement('li');
    
    empObj.addEmp(emp_name.value,emp_dept.value)
    
    ul.appendChild(li)
    
    li.innerHTML = empObj.id + " " + emp_name.value + " " + emp_dept.value;
    
    li.addEventListener("click",markEmp);
    updateEmp();
}

function save(){
    if(window.localStorage){
        var json = JSON.stringify(empObj.empList);
        console.log(json);
        localStorage.setItem('empData',json);
    }
}

function load(){
    if(window.localStorage){
        if(localStorage.empData){
            empObj.empList = JSON.parse(localStorage.empData);
            printEmp();
        }
    }
}


function markEmp(event){
    event.srcElement.classList.toggle('to_delete');
    var currentEmp = event.srcElement.innerHTML.split(" ")[0];
    console.log(currentEmp);
    empObj.toggleEmp(currentEmp);
    updateEmp();
}

function deleteEmp(){
    empObj.deleteEmp();
    printEmp();
}

function updateEmp(){
    document.getElementById("empCount").innerHTML = empObj.empCounter();
    document.getElementById("selectedEmp").innerHTML = empObj.selectedEmp();
}

function searchEmp(){
    if(search_id.value.length >= 1){
        empObj.searchEmp(search_id.value);
        printEmp();
    }
    else {
        printEmp();
    }
}

function printEmp(){
    ul = document.getElementById("list");
    /*empObj.addEmp(emp_name.value,emp_dept.value)*/
    ul.innerHTML = "";
    empObj.empList.forEach(function(empObj){
        li = document.createElement('li');
        li.innerHTML = empObj.id + " " + empObj.name + " " + empObj.department;
        ul.appendChild(li);
        li.addEventListener("click",markEmp);
    })
    updateEmp();
}