var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var button = document.getElementById("button");

function pythagoras(a, b, c) {
    var c = Math.sqrt(a * a + b * b);
    c = c.toFixed(2);
    console.log(c);
    return c;
}

function update(get){
    if (get) {
        a = document.getElementById("a").value;
        b = document.getElementById("b").value;
        c = document.getElementById("c").value;
    }else{
        document.getElementById("a").value = a;
        document.getElementById("b").value = b;
        document.getElementById("c").value = c;
    }
}

button.addEventListener("click", function() {
    update(true);
    if(a && b){
        c = pythagoras(parseFloat(a), parseFloat(b), parseFloat(c));
        update(false);
    }
    else if(a && c){
        b = pythagoras(parseFloat(c), parseFloat(a * -1), parseFloat(b));
        update(false);
    }
    else if(b && c){
        a = pythagoras(parseFloat(c), parseFloat(b*-1), parseFloat(c));
        update(false);
    }
}) 

