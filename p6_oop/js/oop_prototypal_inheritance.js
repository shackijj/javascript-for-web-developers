log_header("OOP: Prototypal Inheritance");

function object(o) {
	function F() {};
	F.prototype = o;
	return new F();
}

var person = {
	name: "Kirill",
	friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

log(person.friends);

// ECMAScript5

var yetAnotherPerson = Object.create(person, {
	name: {
		value: "Greg"
	}
});

log(yetAnotherPerson.name);
log(yetAnotherPerson.friends);