log_header("Element type");

var div = document.getElementById("wrapper");
log(div.tagName);
log(div.tagName == div.nodeName);

log("div.nodeType: " + div.nodeType);
log("div.nodeName: " + div.nodeName);
log("div.nodeValue: " + div.nodeValue);
log("div.parentNode: " + div.parentNode);
log("HTMLElement Props");
log("div.id: " + div.id);
log("div.className: " + div.className);
log("div.title: " + div.title);
log("div.lang: " + div.lang);
log("div.dir: " + div.dir);
// Works weird in IE < 7
log("div.getAttribute(\"class\"): " + div.getAttribute("class"));
div.setAttribute("class", "kokojambo");
log("div.getAttribute(\"class\"): " + div.getAttribute("class"));
// Doen't work in IE < 6
div.removeAttribute("class");
log("div.getAttribute(\"class\"): " + div.getAttribute("class"));
// NamedNodeMap
log(div.attributes);
// Deprecated nodeValue
log("div.attributes.getNamedItem('id').nodeValue: " + div.attributes.getNamedItem('id').nodeValue);
log("div.attributes.getNamedItem('id').value: " + div.attributes.getNamedItem('id').value);

function outputAttributes(element) {
	var pairs = new Array(),
		attrName,
		attrValue,
		i,
		len;
	
	for(i = 0, len = element.attributes.length; i < len; i++) {
		attrName = element.attributes[i].name;
		attrValue = element.attributes[i].value;
		// IE returns all attr event if they are not defined.
		// So, we check are they specied or not
		if (element.attributes[i].specified) {
			pairs.push(attrName + "=\"" + attrValue + "\"");
		}
	}
	return pairs.join(" ");
}