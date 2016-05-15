log_header("Access to elements");

var allElements = document.getElementsByTagName("*");
log(allElements.length);
var ul = document.getElementById("list");
log(ul);
var color = document.getElementsByName("color");
log(color.length);