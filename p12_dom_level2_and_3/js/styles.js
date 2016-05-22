log_header("Styles");

var wrapper = document.getElementById("wrapper");
wrapper.style.backgroundColor = "red";
wrapper.style.width = "100px";
wrapper.style.height = "200px";
wrapper.style.border = "1px solid green";

log("wrapper.cssText: " + wrapper.style.cssText);
log("wrapper.length: " + wrapper.style.length);
log("wrapper.parentRule: " + wrapper.style.parentRule);

// Not present in Firefox.
if (isHostMethod(wrapper.style, "getPropertyCSSValue")) {
	log("wrapper.getPropertyCSSValue('width'): " + wrapper.style.getPropertyCSSValue('width'));
}
log("wrapper.getPropertyPriority('width'): " + wrapper.style.getPropertyPriority('width'));
log("wrapper.getPropertyValue('width'): " + wrapper.style.getPropertyValue('width'));

log("wrapper.item(0): " + wrapper.style.item(0));
wrapper.style.removeProperty("border");
wrapper.style.setProperty("border", "3px solid yellow", "important");

log(wrapper.style.cssText);

//traverse all

log("wrapper styles");
var prop, value, i, len
for(i = 0, len = wrapper.style.length; i < len; i++) {
	prop = wrapper.style[i];
	value  = wrapper.style.getPropertyValue(prop);
	log(prop + " : " + value);
}

log_header("Computed styles from cascad sheets");
log("Style for content");


var content = document.getElementById("content");
if (client.browser.ie) {
	var computedStyle = content.currentStyle;
	log("computedStyle.	backgroundColor: " + computedStyle.	backgroundColor);
	log("computedStyle.	width: " + computedStyle.	width);
	log("computedStyle.	height: " + computedStyle.	height);
	log("computedStyle.	border: " + computedStyle.	border);
} else {
	var contentComputedStyle = document.defaultView.getComputedStyle(content, null);
	log("contentComputedStyle.backgroundColor: " + contentComputedStyle.backgroundColor);
	log("contentComputedStyle.width: " + contentComputedStyle.width);
	log("contentComputedStyle.height: " + contentComputedStyle.height);
	log("contentComputedStyle.border: " + contentComputedStyle.border);
}