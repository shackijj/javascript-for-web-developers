log_header("Function creation");

function firstSum(num1, num2) {
    return num1 + num2;
}

var secondSum = function (num1, num2) {
    return num1 + num2;
};

// Bad 
var thirdSum = new Function("num1", "num2", "return num1 + num2");

//function is Object

log(firstSum(10, 10));
var someSum = firstSum;
log(someSum(10, 10));
firstSum = null;
log(someSum(10, 10));

// Overload is not supported

function addSomeNumber(num) {
    return num + 100;
}

function addSomeNumber(num, pam) {
    return num + 200;
}

// It's 300.
log(addSomeNumber(100));


// Hoisting
//
// it's ok
log(anotherSum(10, 10));
function anotherSum(num1, num2) {
    return num1 + num2;
}

// This produces error
// log(anotherSumInit(10, 10));
var anotherSumInit = function(a, b) {
    return a + b;
}
//Allowed place for anotherSumInit call is after the function definition 
log(anotherSumInit(10, 10));

