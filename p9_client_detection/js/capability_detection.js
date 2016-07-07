log_header("Capabilty detection");

function getElement(id) {
	if (document.getElementById) {
		return document.getElementById();
	} else if (document.all) {
		// IE5
		return document.all[id];
	} else {
		throw new Error("No way to retrieve element.");
	}
}

function isSortable(object) {
	return typeof object.sort == "function";
}

function isHostMethod(object,property) {
	var t = typeof object[property];
	return t == "function" ||
				(!!(t == "object" && object[property])) || // Double ! is used for casting object to boolean
				t == "unknown";
}

var result = isHostMethod(document, "getElementById");
log(result);

// Detect capabilyties and use without check
var hasDOM1 = !!(document.getElementById && document.createElement &&
				document.getElementsbyTagName);