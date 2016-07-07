log_header("Element size");

var content = document.getElementById("content");

// offset is a distance from parent element.

log("content.offsetHeight: " + content.offsetHeight);
log("content.offsetLeft: " + content.offsetLeft);
log("content.offsetTop: " + content.offsetTop);
log("content.offsetWidth: " + content.offsetWidth);
log("content.offsetParent (all higher paramaters are relative to this): " + content.offsetParent);

// relative to root element. 
function getElementLeft(element) {
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;

	while (current !== null) {
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}

	return actualLeft;
}

function getElementTop(element) {
	var actualTop = element.offsetTop;
	var current = element.offsetParent;

	while (current !== null) {
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}

	return actualTop;
}

log("getElementLeft: " + getElementLeft(content));
log("getElementTop: " + getElementTop(content));

// Client dimenstions

function getViewport() {
	if (document.compatMode == "BackCompat") {
		return {
			width: Math.max(document.body.clientWidth, 
				document.body.scrollWidth),
			height: Math.max(document.body.clientHeight, 
				document.body.scrollHeight)
		};
	} else {
		return {
			width: Math.max(document.documentElement.clientWidth, 
				document.documentElement.scrollWidth),
			height: Math.max(document.documentElement.clientHeight, 
				document.documentElement.scrollHeight)
		};
	}
}

// crossbrowser
function getBoundingClientRect(element) {

	var scrollTop = document.body.scrollTop;
	var scrollLeft = document.body.scrollLeft;

	if (element.getBoundingClientRect) {
		if (typeof arguments.callee.offset != "number") {
			var scrollTop = document.documentElement.scrollTop;
			var temp = document.createElement("div");
			temp.style.cssText = "position: absolute; left: 0; top: 0;";
			document.body.appendChild(temp);
			arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
			document.body.removeChild(temp);
			temp = null;
		}

		var rect = element.getBoundingClientRect();
		var offset = arguments.callee.offset;

		return {
			left: rect.left + offset,
			right: rect.right + offset,
			top: rect.top + offset,
			bottom: rect.bottom + offset
		};
	} else {
		var actualLeft = getElementLeft(element);
		var actualTop = getElementTop(element);

		return {
			left: actualLeft - scrollLeft,
			right: actualLeft + element.offsetWidth - scrollLeft,
			top: actualTop - scrollTop,
			bottom: actualTop + element.offsetHeight - scrollTop
		};
	}
}



var viewport = getViewport();
log("Viewport: (width: " + viewport.width + ", height: " + viewport.height + ")");

var scrollableContainer = document.getElementById("scrollable-container");

scrollableContainer.addEventListener("scroll", function () {
	log("scrollLeft: " + this.scrollLeft + " scrollTop: " + this.scrollTop );
}, false);

scrollableContainer.addEventListener("click", function() {
	this.scrollLeft = 0;
	this.scrollTop = 0;
});

var sizes = getBoundingClientRect(scrollableContainer);
log(sizes);