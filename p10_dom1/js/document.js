log_header("Document object");

log("document.nodeType: " + document.nodeType);
log("document.nodeName: " + document.nodeName);
log("document.nodeValue: " + document.nodeValue);
log("document.parentNode: " + document.parentNode);
log("document.ownerDocument: " + document.ownerDocument);


// 
var doctype = document.doctype;
log("html === document.childNodes[0]: " + (doctype === document.childNodes[0]));
log("html === document.firstChild: " + (doctype === document.firstChild));

//Custom props

log("An old title " + document.title);
document.title = "New Title";
log("document.referrer: " + document.referrer);
log("document.URL: " + document.URL);
log("document.domain: " + document.domain);