log_header("Access to elements");

var allElements = document.getElementsByTagName("*");
log(allElements.length);
var ul = document.getElementById("list");
log(ul);
var color = document.getElementsByName("color");
log(color.length);

// Special collections. HTMLCollection

var a_with_names = document.anchors;
var forms = document.forms;
var images = document.images;
var links = document.links;