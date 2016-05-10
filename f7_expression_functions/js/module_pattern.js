log_header("Pattern Module");

/*

var singleton = {
	name: value,
	method: function() {
		
	}
};

*/

var singleton = function() {
	var privateVariable = 10;
	
	function privateFunction() {
		return false;
	}
	
	return {
		publicProperty: true,
		publicMethod: function() {
			privateVariable++;
			return privateFunction();
		}
	};
}();

log(singleton.publicProperty);
log(singleton.publicMethod());

function BaseComponent() {
	
}

var application = function() {
	var components = new Array();
	
	components.push(new BaseComponent());
	
	return {
		getComponentsCount: function() {
			return components.length;
		},
		
		
		
		registerComponent: function(component) {
			if(typeof component == "object") {
				components.push(component);
			}
		}
	};
}();

log(application.getComponentsCount());
application.registerComponent(new BaseComponent());
log(application.getComponentsCount());