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
// Original string is not changed!
log(val);
log(result);

result = val.concat("world", "!");
log(result);

log(stringValue.slice(3));
log(stringValue.substring(3));
log(stringValue.substr(3));
log(stringValue.slice(3, 7));
log(stringValue.substring(3, 7));
log(stringValue.substr(3, 7));

log("Negative indexes");

log(stringValue.slice(-3));
log(stringValue.substring(-3));
log(stringValue.substr(-3));
log(stringValue.slice(3, -4));
log(stringValue.substring(3, -4));
log(stringValue.substr(3, -4));

log("Searching");

log(stringValue.indexOf("o"));
log(stringValue.lastIndexOf("o"));

log(stringValue.indexOf("o", 6));
log(stringValue.lastIndexOf("o", 6));

var text = "Lorem ipsum dolor sit amet, consectetur adipisocong...";
var pos = text.indexOf("o");
var positions = [];

while(pos > -1) {
    positions.push(pos);
    pos = text.indexOf("o", pos + 1);
}
log(positions);

// ECMAScript5 trim
var beforeTrim = " Yellow world ";
log("beforeTrim : '" + beforeTrim + "'"); 

var afterTrim = beforeTrim.trim();
log("afterTrim: '" + afterTrim + "'");
log("beforeTrim again: '" + beforeTrim + "'");

log("Registry-changing methods");

var mixedRegistryStr = "KaWaBaNgA";
log(".toLowerCase " + mixedRegistryStr.toLowerCase());
log(".toLocaleLowerCase " + mixedRegistryStr.toLocaleLowerCase());
log(".toUpperCase " + mixedRegistryStr.toUpperCase());
log(".toLocaleUpperCase " + mixedRegistryStr.toLocaleUpperCase());
