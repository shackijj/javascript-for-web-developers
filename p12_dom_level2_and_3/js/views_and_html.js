log_header("Views and html")

log("Support DOM 2 Core?: " + document.implementation.hasFeature("Core", "2.0"));
log("Support DOM 3 Core?: " + document.implementation.hasFeature("Core", "3.0"));
log("Support DOM 2 HTML?: " + document.implementation.hasFeature("HTML", "2.0"));
log("Support DOM 2 Views?: " + document.implementation.hasFeature("Views", "2.0"));
log("Support DOM 2 XML?: " + document.implementation.hasFeature("XML", "2.0"));

var div1 = document.createElement("div");
div1.setAttribute("class", "box");

var div2 = document.createElement("div");
div2.setAttribute("class", "box");


log(div1.isEqualNode(div2));
// Doesn't work in moz
if (typeof div1.isSameNode == "function") {
	log(div1.isSameNode(div2));
}

var div3 = document.createElement("div");

if (typeof div3.setUserData == "function") {
	div3.setUserData("name", "Nicholas", 
		function(operation, key, value, src, dest) {
			if (operation == 1) {
				dest.setUserData("name", "Nicholas", function() {});
			}
	});

	var div4 = div3.cloneNode(true);

	log(div4.getUserData("name"));	
}

var iframe = document.getElementById("myIframe");
// Doesn't work in Firefox. Probably it will work fine using http:// not file:// access
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

log(iframeDoc);