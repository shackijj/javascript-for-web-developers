log("Closures and _this_ object");

var name = "The Window";

var object = {
	name : "My Object",
	getNameFunc : function() {
		return function() {
			return this.name;
		};
	}
};

log(object.getNameFunc()()); // The Window

var anotherObject = {
	name : "My Another Object",
	getNameFunc : function() {
		// Saving a poiner to object in a variable
		var that = this;
		return function() {
			return that.name;
		};
	}
}

log(anotherObject.getNameFunc()());

var yetAnotherObject = {
	name : "Yet another project",
	getName: function () {
		return this.name;
	}
};

log(yetAnotherObject.getName()); // Yet another project
log((yetAnotherObject.getName)());  // Yet another project
log((yetAnotherObject.getName = yetAnotherObject.getName)()); // The Window