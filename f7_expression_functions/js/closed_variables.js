function add(num1, num2) {
	// num1, num2, sum are closed
	var sum = num1 + num2;
	return sum;
}

function MyObject() {
	var privateVariable = 10;
	
	function privateFunction() {
		return false;
	}
	
	this.publicMethod = function () {
		privateVariable++;
		return privateFunction();
	}
}

var obj = new MyObject();
log(obj.privateVariable); // undefined
// Error
// log(obj.privateFunction());

log(obj.publicMethod()); // false, ok

function Person(name) {
	this.getName = function() {
		return name;
	}
	
	this.setName = function(value) {
		name = value;
	}
}

var person = new Person("Nicholas");
log(person.getName());
person.setName("Greg");
log(person.getName());