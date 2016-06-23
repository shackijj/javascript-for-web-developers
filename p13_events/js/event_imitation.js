log_header("Event_imitation");

// Mouse events
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    log("Btn clicked!");
};

var event = document.createEvent("MouseEvents");

event.initMouseEvent("click", true, true, document.defaultView,
    0, 0, 0, 0, 0, false, false, false, 0, null);

btn.dispatchEvent(event);

// Keyboard events

var textbox = document.getElementById("myText");

textbox.onkeyup = function(event) {
    log("Key " + event.keyCode + " up!");
};