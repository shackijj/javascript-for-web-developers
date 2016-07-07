log_header("OOP Creation patterns");


// Prototype pattern

function Person() {
}

Person.prototype.name = "Kirill";
Person.prototype.age = 26;
Person.prototype.job = "Software Engeneer";
Person.prototype.sayName = function() {
	console.log("My name is " + this.name);
};

var person1 = new Person();
person1.sayName();

var person2 = new Person();
person2.sayName();

log(person1.sayName == person2.sayName);

log(Person.prototype.constructor);
log(Person.prototype.isPrototypeOf(person1));

//ECMAScript5 Only

log(Object.getPrototypeOf(person1) == Person.prototype);
log(Object.getPrototypeOf(person1).name);

person2.name = "Sveta";

// name of prototype
person1.sayName()
// name of instance
person2.sayName();
person1.name = "Petya";
log("Has person1 own propery name?: " + person1.hasOwnProperty("name"));
// Delete instance name
delete person1.name;
log("Has person1 own propery name?: " + person1.hasOwnProperty("name"));
log("Has person2 own propery name?: " + person2.hasOwnProperty("name"));