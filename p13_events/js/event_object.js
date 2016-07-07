log_header("Event object");

var btn = document.getElementById("myBtn");

/*
btn.onclick = function(event) {
	log("DOM 0: " + event.type);
	log("event.target === this: " + (event.target === this));
	log("event.currentTarget === this: " +  (event.currentTarget === this));
}
*/

document.body.onclick = function(event) {
	log("Body event");
	log("event.currentTarget === document.body: " + (event.currentTarget === document.body));
	log("this === document.body: " + (this === document.body));
	log("event.target === document.getElementById(\"myBtn\"): " +
		(event.target === document.getElementById("myBtn")));
}

/*
btn.addEventListener("click", function(event) {
	log("DOM 2: " + event.type);
}, false);
*/

var handler = function handler(event) {
    // Stop propagation of event immediately the "body" code above is not executed.
    event.stopPropagation();
	switch(event.type) {
		case "click":
            log("Clicked!");
            break;
        case "mouseover":
            event.target.style.backgroundColor = "red";
            break;
        case "mouseout":
            event.target.style.backgroundColor = "";
            break;
	}
};

btn.onclick = handler;
btn.onmouseout = handler;
btn.onmouseover = handler;