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