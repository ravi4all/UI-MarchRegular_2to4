window.addEventListener("DOMContentLoaded", init);

var emp_id;
var emp_name;
var emp_dept;

function init(){
    emp_id = document.getElementById("box_1");
    emp_name = document.getElementById("box_2");
    emp_dept = document.getElementById("box_3");
    
  document.getElementById("add").addEventListener("click",add);
}

function add(){
    ul = document.getElementById("list");
    li = document.createElement('li');
    
    empObj.addEmp(emp_name.value,emp_dept.value)
    
    ul.appendChild(li)
    
    li.innerHTML = empObj.id + " " + emp_name.value + " " + emp_dept.value;
    
}