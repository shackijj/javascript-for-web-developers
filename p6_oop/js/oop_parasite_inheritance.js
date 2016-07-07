log_header("OOP Parasital Inheritance");

function object(o) {
	function F() {};
	F.prototype = o;
	return new F();
}

function createAnother(original) {
	var clone = object(original);
	clone.sayHi = function() {
		console.log("Hi");
	}
	return clone;
}

var person = {
	name: "Greg",
	friends: ["Shelby", "Court", "Van"]
};

var another = createAnother(person);
another.sayHi();
