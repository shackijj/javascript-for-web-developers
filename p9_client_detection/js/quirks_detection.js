log_header("Quirks detections");

// IE8 Bug. for-in loop pass property if that has name as prototype property and the
// prototype prop has [[Enum]] false
var hasDontEnumQuirk = function() {
	var o = { toString : function(){} };
	for (var prop in o) {
		if (prop == "toString") {
			return false;
		}
	}
	return true;
}();

// Safari3 Bug
var hasEnumShadowQuirk = function() {
	var o = { toString : function(){} },
		count = 0;
	for(var prop in o) {
		if (prop == "toString") {
			count++;
		}
	}
	return (count > 1);
}();