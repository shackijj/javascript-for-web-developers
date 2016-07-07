log_header("OOP Combination inheritance");

function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
	console.log(this.name);
};

function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function () {
	console.log(this.age);
};

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("gray");
log(instance1.colors);
instance1.sayName();
instance1.sayAge();

var instance2 = new SubType("Greg", 27);
log(instance2.colors);
instance2.sayName();
instance2.sayAge();
log(instance2 instanceof SuperType);
log(instance2 instanceof SubType);
log(SubType.prototype.isPrototypeOf(instance2));
log(SuperType.prototype.isPrototypeOf(instance2));