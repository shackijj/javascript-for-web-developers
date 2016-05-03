log_header("Shells: string");

var stringObject = new String("hello world");
var stringValue  = "hello world";
log(stringValue.length);

log("Char functions");

log("First char of string '" + stringValue + "' is " +  stringValue.charAt(0));
log("It has code " + stringValue.charCodeAt(0));
 
log("ECMAScipt5 only " + stringValue[0]);

// String manipulation

var val = "hello ";
var result = val.concat("world");
log(val);
log(result);

result = val.concat("world", "!");
log(result);