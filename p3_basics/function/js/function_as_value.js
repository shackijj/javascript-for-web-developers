log_header("Function as value");

function callSomeFunction(someFunction, someArgument) {
    return someFunction(someArgument);
}

function add10(num) {
    return num + 10;
}

var result1 = callSomeFunction(add10, 10);
log(result1);

function getGreeting(name) {
    return "Hello, " + name;
}

var result2 = callSomeFunction(getGreeting, "Kirill");
log(result2);

function createComparisonFunction(propertyName) {
    return function (obj1, obj2) {
        var val1 = obj1[propertyName];
        var val2 = obj2[propertyName];

        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    }
}

var data = [{name : "Kirill", age: 26}, {name : "Sveta", age: 25}];
data.sort(createComparisonFunction("age"));
log(data[0]);
log(data[1]);
