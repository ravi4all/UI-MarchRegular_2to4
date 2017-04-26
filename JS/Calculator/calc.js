function add(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    c = parseInt(a.value) + parseInt(b.value);
    document.getElementById("result").innerHTML = c;
}