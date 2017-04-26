window.addEventListener("load",init);

function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    i = document.getElementById("result");
    c = 0
    /*document.getElementById("add").addEventListener("click", function(){
        c = parseInt(a.value) + parseInt(b.value);
        i.innerHTML = c;
    })*/
    document.getElementById("add").addEventListener("click",add);
}

function add(){
    c = parseInt(a.value) + parseInt(b.value);
    i.innerHTML = c;
}