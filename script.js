var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var button = document.getElementById("button");

function pythagoras(a, b, c, output) {
  if (output == "a") {
    var output = Math.sqrt(b * b * -1 + c * c);
    output = output.toFixed(2);
    console.log(output);
    return output;
  }
  if (output == "b") {
    var output = Math.sqrt(a * a * -1 + c * c);
    output = output.toFixed(2);
    console.log(output);
    return output;
  }
  if (output == "c") {
    var output = Math.sqrt(a * a + b * b);
    output = output.toFixed(2);
    console.log(output);
    return output;
  }
}

function update(get) {
  if (get) {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
  } else {
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
    document.getElementById("c").value = c;
  }
}

button.addEventListener("click", function () {
  update(true);
  if (a && b) {
    c = pythagoras(parseFloat(a), parseFloat(b), parseFloat(c), "c");
    update(false);
  } else if (a && c) {
    b = pythagoras(parseFloat(a), parseFloat(b), parseFloat(c), "b");
    update(false);
  } else if (b && c) {
    a = pythagoras(parseFloat(a), parseFloat(b), parseFloat(c), "a");
    update(false);
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    update(true);
    if (a && b) {
      c = pythagoras(parseFloat(a), parseFloat(b), parseFloat(c), "c");
      update(false);
    } else if (a && c) {
      b = pythagoras(parseFloat(a), parseFloat(b), parseFloat(c), "b");
      update(false);
    } else if (b && c) {
      a = pythagoras(parseFloat(a), parseFloat(b), parseFloat(c), "a");
      update(false);
    }
  }
});
