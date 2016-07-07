log_header("Functions: closure");
function createCompareFunction(propertyName) {
	return function (object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if (value1 > value2) {
			return 1;
		} else if (value1 < value2) {
			return -1;
		} else {
			return 0;
		}
	}
}

var compareNames = createCompareFunction("name");
var result = compareNames({name : "Kirill"}, {name: "Sveta"});
log(result);


// All functions in result return 10, because all of them have a pointer to the variable i 
// and function createFunctions in their [[ Scope ]] variable.
function createFunctions() {
	var result = new Array();
	
	for(var i = 0; i < 10; i++) {
		result[i] = function() {
			return i;
		};
	}
	
	return result;
}

function createFunctionsRight() {
	var result = new Array();
	for(var i = 0; i < 10; i++) {
		// Functions get arguments as values in JS, so then the variable is copied in the num variable,
		// and returned function has an anonimous function in [[Scope]] and pointer to uniq num variable.
		result[i] = function(num) {
			return function () {
				return num;
			};
		}(i);
	}
	return result;
}

var result1 = createFunctions();
var result2 = createFunctionsRight();

for (var i = 0, length = result1.length; i < length; i++) {
	log(result1[i]());
}

for (var i = 0, length = result2.length; i < length; i++) {
	log(result2[i]());
}