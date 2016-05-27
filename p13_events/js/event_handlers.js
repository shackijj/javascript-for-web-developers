log_header("Event handlers");

// DOM level 0
var btn = document.getElementById("clickMe");
btn.onclick = function () {
	log("Button widh id '" + this.id + "' has been clicked");
};

// Dom level 2

// third boolean arg defines when 
// the event handler will be called (bubbling or capture stage).
btn.addEventListener("click", function() {
	log("Hello from second handler: " + this.id);
}, false);

// Remove and add handlers

var handler = function() {
	log("Third handler");
};

btn.addEventListener("click", handler, false);
btn.removeEventListener("click", handler, false);

// IE Code

if (typeof btn.attachEvent == "function") {
	var ie_handler = function() {
		log("IE handler");
	};

	btn.attachEvent("click", function () {
		log(this === window);
	});

	btn.attachEvent("click", ie_handler);
	btn.detachEvent("click", ie_handler);
}