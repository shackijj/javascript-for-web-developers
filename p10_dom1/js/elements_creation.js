log_header("Element's creation");

var div = document.createElement("div");
div.id = "box";

document.body.appendChild(div);

// Text Type

var text = document.createTextNode("Yayaya Kokojambo");
div.appendChild(text);

var anotherTextNode = document.createTextNode("Yayay Yeee!");
div.appendChild(anotherTextNode);


log("Div childes length:" + div.childNodes.length);

div.normalize();

log("Div childes length after normalize() call: " + div.childNodes.length);

div.firstChild.splitText(16);

log("Div childes length after splitting of text node call:" + div.childNodes.length);
