log_header("OOP: creating patterns. Prototype");

function Person() {
}

Person.prototype.name = "Kirill";
Person.prototype.age = 26;
Person.prototype.job = "Software Engeneer";
Person.prototype.sayName = function () {
	console.log(this.name);
}

var p1 = new Person();
var p2 = new Person();

// in operator checks if an object has own/prototype property

log(p1.hasOwnProperty("name"));
log("name" in p1);

p1.name = "Sveta";
log(p1.name);
log(p1.hasOwnProperty("name"));
log("name" in p1);

log(p2.name);
log(p2.hasOwnProperty("name"));
log("name" in p2);

delete p1.name;
log(p1.name);
log(p1.hasOwnProperty("name"));
log("name" in p1);

function hasPrototypeProperty(object, name) {
	return !object.hasOwnProperty(name) && (name in object);
}

p1.name = "Sveta";
log(hasPrototypeProperty(p1, "name")); // false
log(hasPrototypeProperty(p2, "name"));

var o = {
	toString: function() {
		return "My Object";
	}
}

for(var prop in o) {
	if (prop == "toString") {
		console.log("Found toString")
	}
}

// All enumerable props of instance (doesn't show prototype's props)
log(Object.keys(p1));
// All enumerable props of instance
log(Object.keys(Person.prototype));
// All props of prototype
log(Object.getOwnPropertyNames(Person.prototype));