log_header("Patter Extended module");

function CustomType() {
	
}

var singleton = function() {
	var privateVariable = 10;
	
	function privateFunction() {
		return false;
	}
	
	var object = new CustomType();
	
	object.publicProperty = true;
	
	object.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
	
	return object;
}();

log(typeof singleton);
log(singleton instanceof CustomType);

function BaseComponent() {
	
}

var application = function() {
	var components = new Array();
	
	components.push(new BaseComponent());
	
	var app = new BaseComponent();
	
	app.getComponentsCount = function () {
		return components.length;
	};
	
	app.registerComponent = function (component) {
		if (typeof components == "object") {
			components.push(component);
		}
	};
	
	return app;
}();