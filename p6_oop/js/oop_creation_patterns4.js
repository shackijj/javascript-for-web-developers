log_header("OOP: Creating objects. Prototype...");

function Person() {
}

Person.prototype = {
	name: "Nicolas",
	age: 29,
	job: "Software engeneer",
	sayName: function () {
		console.log(this.name);
	}
};

var p1 = new Person();
log(p1 instanceof Person);
log(p1 instanceof Object);
// Difference
log(p1.constructor == Person);
log(p1.constructor == Object);


// By default constructor is enumerable
/* 
Person.prototype = {
	constructor: Person (enumerable)
	...
*/
// Recreate standart constructor
Object.defineProperty(Person.prototype, "constructor", {
	value: Person,
	enumerable: false
});

// Dynamic nature

var friend = new Person();

Person.prototype.sayHi = function () {
	console.log("Hi!");
}

friend.sayHi();

function Cat() {
}

var kitty = new Cat();

Cat.prototype = {
	sayMeow: function() {
		console.log("Meow!");
	}
}
// Error Because pointer on a prototype is created on the constructor call.
// kitty.sayMeow();

log(Array.prototype.sort);
log(String.prototype.substring);

// Customize default objects
String.prototype.startWith = function (needle) {
	if (this.indexOf(needle) == 0) {
		return true;
	} else {
		return false;
	}
}

var msg = "Hello, Piotr!";
log(msg.startWith("ell"));


// Problem
// If prototype contain pointer type then the prop is changed.
function Book() {
}

Book.prototype = {
	constructor: Book,
	authors: ["Ilf", "Petrov"],
	year: 1980
}

var book1 = new Book();
var book2 = new Book();

book1.authors.push("Kokojambo");
log(book2.authors);
log(book1.authors);
log(book1.authors == book2.authors);
