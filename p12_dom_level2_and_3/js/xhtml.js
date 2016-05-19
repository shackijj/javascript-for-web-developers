log(document.body.isDefaultNamespace("http://www.w3.org/1999/xhtml"));

var svg = document.getElementsByTagName("s:svg")[0];

log("Prefix for http://w3.org/2000/svg: " + svg.lookupPrefix("http://w3.org/2000/svg"));
log("NamespaceURI for s: " + svg.lookupNamespaceURI("s"));

var newSvg = document.createElementNS("http://w3.org/2000/svg", "svg");
