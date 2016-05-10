(function() {
	// Static variables
	var privateVariable = 10;
	
	function privateFunction() {
		return false;
	}
	
	MyObject = function () {
	};
	
	MyObject.prototype.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
})();

var obj = new MyObject();
log(obj.publicMethod());

(function() {
	var name = "";
	
	Person = function(value) {
		name = value;
	};
	
	Person.prototype.getName = function() {
		return name;
	};
	
	Person.prototype.setName = function(value) {
		name = value;
	}
})();

var person1 = new Person("Kirill");
log(person1.getName());
person1.setName("Oleg");
log(person1.getName());

var person2 = new Person("Sveta");

log(person1.getName());
log(person2.getName());