log_header("What is inside of a function?");


// Works correct if name is not changed.
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

//Works well always
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

var trueFactorial = factorial;

factorial = function() {
    return 0;
}

log(trueFactorial(5));
log(factorial(5));

window.color = "red";
var o = { color: "blue" };

function sayColor() {
    log(this.color);
}

log("Global context");
sayColor();

log("O context");
o.sayColor = sayColor;
o.sayColor();

//ECMAScript5, but supported by all browser except earlier versions of Opera

function outer() {
    inner();
}

function inner() {
    log(inner.caller);
}

outer();

//Weak bound
function outer() {
    inner();
}

function inner() {
    log(arguments.callee.caller);
}

outer();
