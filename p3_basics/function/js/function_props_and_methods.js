function sayName(name) {
    log(name);
}

function sum(num1, num2) {
    return num1 + num2;
}

function sayHi() {
    log("Hello!");
}

log("Length of a function object is number of the function's args");
log("sayName.length : " + sayName.length);
log("sum.lenghth    : " + sum.length);
log("sayHi.length   : " + sayHi.length);

function applySum1(num1, num2) {
    return sum.apply(this, arguments);
}

function applySum2(num1, num2) {
    return sum.apply(this, [num1, num2]);
}

log(applySum1(10, 10));
log(applySum2(10, 10));

function callSum(num1, num2) {
    return sum.call(this, num1, num2);
}

log("power of call and apply methods is that they give ability to change _this_ object");
window.color = "red";
var o = { color: "blue" };

function sayColor() {
    log(this.color);
}

sayColor.call(this);
sayColor.call(window);
sayColor.call(o);

// ECMAScript 5 only
log("bind method");
var objectSayColor = sayColor.bind(o);
objectSayColor();

log(".toString()       : " + sayColor.toString());
log(".toLocaleString() : " + sayColor.toLocaleString());
log(".valueOf()        : " + sayColor.valueOf());
