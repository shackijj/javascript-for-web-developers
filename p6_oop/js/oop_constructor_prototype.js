log_header("OOP Constructor + Prototype");

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    }
};

var person1 = new Person("Oleg", 28, "Doctor");
var person2 = new Person("Petya", 27, "Teacher");

person1.friends.push("Van");

log(person1.friends);
log(person2.friends);

log(person1.friends == person2.friends);
log(person1.sayName == person2.sayName);
