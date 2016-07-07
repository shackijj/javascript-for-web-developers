log_header("OOP Parasite constructor");

function Person(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}

var friend = new Person("Kolya", 28, "Doctor");

function SpecialArray() {
    var values = new Array();
    
    values.push.apply(values, arguments);

    values.toPipedString = function() {
        return this.join("|");
    };

    return values;
}

var colors = new SpecialArray("red", "yellow", "blue");

log(colors.toPipedString());
