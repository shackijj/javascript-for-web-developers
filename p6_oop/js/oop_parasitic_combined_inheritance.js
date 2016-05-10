function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
	console.log(this.name);
}

function SubType(name, age) {
	SuperType.call(this, name); // Second Call
	this.age = age;
}

/*
SubType.prototype = new SuperType(); // First call
SubType.prototype.constructor = SubType;
*/

function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

function inhertitPrototype(subType, superType) {
	var proto = object(superType.prototype);
	proto.constructor = subType;
	subType.prototype = proto;	
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
	console.log(this.age);
};