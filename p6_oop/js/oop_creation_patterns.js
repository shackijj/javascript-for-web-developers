log_header("OOP: Patterns of object creation.");

// Fabric

function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		console.log(this.name);
	};
	return o;
}

var person1 = createPerson("Kirill", 26, "Software Engeneer");
var person2 = createPerson("Sveta", 25, "System Administrator");

// Constructor pattern

function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function () {
		console.log(this.name);
	}
}

var person3 = new Person("Alexandr", 28, "Network engeneer");
var person4 = new Person("Pavel", 28, "DJ");

log(person3.constructor == Person);
log(person4.constructor == Person);
log(person3 instanceof Object);
log(person3 instanceof Person);
log(person4 instanceof Object);
log(person4 instanceof Person);

// Constructor's drawbacks

log(person3.sayName == person4.sayName);

// Solution (not good)

/*
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
}

function sayName() {
	console.log(this.name);
}

*/

// Constructor as function

// Call function as a constructor
var person5 = new Person("Dmitry", 28, "Manager");
person5.sayName();

// Call function as a function
Person("Alexandr", 26, "Musician");
window.sayName(); 

// Call as function in an another object contextual

var o = new Object();
Person.call(o, "Anna", 27, "Designer");
o.sayName();