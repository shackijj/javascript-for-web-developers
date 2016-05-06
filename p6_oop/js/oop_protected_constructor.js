log_header("OOP: Protected constructor");

function Person(name, age, job) {
    var o = new Object();

    o.sayName = function() {
        console.log(name);
    };

    return o;
}

var friend1 = Person("Oleg", 29, "Doctor");
friend1.sayName();

var friend2 = Person("Petya", 21, "Driver");
friend2.sayName();

