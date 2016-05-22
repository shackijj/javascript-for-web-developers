function getBoundingClientRect(element) {
	if (typeof arguments.callee.offset != "number") {
		var scrollTop = document.documentElement.scrollTop;
		var temp = document.createElement("div");
		type.style.cssText = "position: absolute; left: 0; top: 0;";
		document.body.appendChild(temp);
		arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
		document.body.removeChild(temp);
		temp = null;
	}

	var rect = element.getBoundingClientRect();
	var offset = argument.callee.offset;

	return {
		left: rect.left + offset,
		right: rect.right + offset,
		top: rect.top + offset,
		bottom: rect.bottom + offset
	};
}