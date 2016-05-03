log_header("Shells: workflow")

var s1 = "some text";
var s2 = s1.substring(2);

// Equivalent of 1-2 lines
s1 = new String("some text");
s2 = s1.substring(2);
s1 = null;

log("Shells are not objects");
s1 = "some text";
s1.color = "red";
log(s1.color);

var obj = new Object("some text");
log(obj instanceof String);
log(typeof obj);

log("Shells is not a type casting");

var value = "25";
var number = Number(value);
log(typeof number);

obj = new Number(value);
log(typeof obj);