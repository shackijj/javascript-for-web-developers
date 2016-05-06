log_header("Built-in objects");

// Global
var str = "1";
log(parseInt(str));
log(parseFloat(str));
log(isNaN(str));
log(isFinite(str));

var uri = "http://www.w3schools.com/jsref /met_document_createtextnode.asp";

log(encodeURI(uri));
log(encodeURIComponent(uri));

var encoded_uri = encodeURIComponent(uri);

log("Encoded: " + encoded_uri);
log(decodeURI(encoded_uri));
log(decodeURIComponent(encoded_uri));

eval("log('Hello from eval() ' + encoded_uri)");

eval("var eval_var = 'eval var'");
log(eval_var);

// Global is the window in browser

var color = "red";
function sayColor() {
	console.log(window.color);
}

window.sayColor();

// Get global from any context.

var global = function () {
	return this;
}();

log(global);

//Math 

log(Math.E);
log(Math.LN10);
log(Math.LN2);
log(Math.LOG2E);
log(Math.LOG10E);
log(Math.PI);
log(Math.SQRT1_2);
log(Math.SQRT2);

var max = Math.max(100, 2, 23);
log(max);

var min = Math.min(100, 2, 23);
log(min);
// For arrays
max = Math.max.apply(Math, [100, 2, 23]);
log(max);

log(Math.ceil(25.9));
log(Math.ceil(25.6));
log(Math.ceil(25.1));

log(Math.round(25.9));
log(Math.round(25.6));
log(Math.round(25.1));

log(Math.floor(25.9));
log(Math.floor(25.6));
log(Math.floor(25.1));

// From 0 to 2
var rand_num = Math.floor( Math.random() * 3 + 0);

// Formulae
function selectFrom(low, up) {
	var choices = up - low + 1;
	return Math.floor(Math.random() * choices + low);
}

log(selectFrom(0, 3));