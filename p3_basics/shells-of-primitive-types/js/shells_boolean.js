log_header("Shells: Boolean")
var booleanObject = new Boolean(true);

var falseObj = new Boolean(false);
var result = falseObj && true;
// I guess that it's true because falseObj is an object.
log(result);

var falseValue = false;
result = falseValue && true;
log(result);

log(typeof falseObj);
log(typeof falseValue);
log(falseObj instanceof Boolean);
log(falseValue instanceof Boolean);