log_header("Event types");

var isHTMLEventsSupported = document.implementation.hasFeature("HTMLEvents", "2.0");
var isUIEventsSupported = document.implementation.hasFeature("UIEvent", "3.0");

// LOAD EVENT

var image = document.getElementById("myImg");
EventUtil.addHandler(image, "load", function(event) {
    event = EventUtil.getEvent(event);
    log("Source of img: " + EventUtil.getTarget(event).src);
});


EventUtil.addHandler(window, "load", function(event) {
    var image = document.createElement("img");
    EventUtil.addHandler(image, "load", function(event) {
        event = EventUtil.getEvent(event);
        log("Event target src: " + EventUtil.getTarget(event).src);
    });
    document.body.appendChild(image);
    // image is loaded when the src prop is defined
    image.src = "img/smile.gif";
});

EventUtil.addHandler(window, "load", function() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    EventUtil.addHandler(script, "load", function(event) {
        log("Script loaded");
    });
    script.src = "js/example.js";
    // script and link are loaded when they are added to document 
    document.body.appendChild(script);
});

// UNLOAD EVENT
// Doesn't work in chrome and firefox on linux
EventUtil.addHandler(window, "unload", function() {
    alert("Document unloaded!");
});

EventUtil.addHandler(window, "resize", function(event) {
    log("Resized");
});