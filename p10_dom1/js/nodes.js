function convertToArray(nodes) {
	var array = null;
	try {
		array = Array.prototype.slice.call(nodes, 0);
	} catch(ex) {
		array = new Array();
		for(var i = 0, len = nodes.lengt; i < len; i++) {
			array.push(nodes[i]);
		}
	}
	return array;
}


var body = document.getElementsByTagName("body")[0];

var p = document.createElement("P");
p.innerHTML = "I'm a P";
var returnedElement = body.appendChild(p);
log(p == returnedElement);
log(p == body.lastChild);

var h1 = document.createElement("H1");
h1.innerHTML = "I'm a H1";
returnedElement = body.insertBefore(h1, body.firstChild);
log(h1 == body.firstChild);

var h1_new = document.createElement("H1");
h1_new.innerHTML = "I'm a new H1";
returnedElement = body.replaceChild(h1_new, h1);
log(body.firstChild == h1_new);
log(returnedElement == h1);

returnedElement = body.removeChild(p);
log(returnedElement == p);

var ul = document.getElementById("list");
// Clone with all element
var deepList = ul.cloneNode(true);
log(deepList.childNodes.length);
var shallowList = ul.cloneNode(false);
log(shallowList.childNodes.length);