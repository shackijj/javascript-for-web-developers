function loadScript(url) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url
	document.body.appendChild(script);		
}

function loadScriptString(code) {
	var script = document.createElement("script");
	try {
		script.appendChild(document.createTextNode(code));
	} catch(ex) {
		// IE
		script.text = code;
	}
	
	document.body.appendChild(script);
}

function loadStyle(url) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = url;
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}

function loadStyleString(css) {
	var style = document.createElement("style");
	try {
		style.appendChild(document.createTextNode(css));
	} catch(ex) {
		// IE
		style.styleSheet.cssText = css;
	}
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(style);
}

loadScript("js/client.js");
loadScriptString("alert('Hello dynamic script')");
loadStyle("style.css");
loadStyleString("#list {color:blue;}");