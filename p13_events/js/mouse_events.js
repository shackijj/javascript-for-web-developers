log_header("Mouse events");

var isSupported2 = document.implementation.hasFeature("MouseEvents", "2.0");
var isSupported3 = document.implementation.hasFeature("MouseEvent", "3.0");

log("isSupported2: " + isSupported2);
log("isSupported3: " + isSupported3);

var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event) {
    event = EventUtil.getEvent(event);
    log("Client coordinates x: " + event.clientX + " y: " + event.clientY);
});

// Crossbrowser
EventUtil.addHandler(div, "click", function(event) {
    event = EventUtil.getEvent(event);

    var pageX = event.pageX,
        pageY = event.pageY;

    if(pageX === undefined) {
        pageX = event.clientX + (document.body.scrollLeft || 
            document.documentElement.scrollLeft);
    }

    if (pageY === undefined) {
        pageY = event.clientY + (document.body.scrollLeft ||
            document.documentElement.scrollLeft);
    }

    log("Page coordinates x: " + event.pageX + " y: " + event.pageY);
});

EventUtil.addHandler(div, "click", function(event) {
    event = EventUtil.getEvent(event);

    log("Screen coordinates x: " + event.screenX + " y:" + event.screenY);
});

EventUtil.addHandler(div, "click", function(event) {
    event = EventUtil.getEvent(event);

    var keys = [];

    if (event.shiftKey) {
        keys.push("shift");
    }

    if (event.ctrlKey) {
        keys.push("ctrl");
    }

    if (event.altKey) {
        keys.push("alt");
    }

    if (event.metaKey) {
        keys.push("meta");
    }


    log("Keys: " + keys.join(","));
});

EventUtil.addHandler(div, "mouseout", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var relatedTarget = EventUtil.getRelatedTarget(event);

    log("Mouse out of " + target.tagName + " to " + relatedTarget.tagName);
});

EventUtil.addHandler(div, "mousedown", function(event) {
    event = EventUtil.getEvent(event);
    var button;

    switch(EventUtil.getButton(event)) {
        case 0:
            button = "Left";
            break;
        case 1:
            button = "Middle";
            break;
        case 2:
            button = "Right";
            break;
    }

    log("Button: " + button);

});

EventUtil.addHandler(document, "mousewheel", function(event) {
    event = EventUtil.getEvent(event);
    log(event.wheelDelta);
});

(function() {
    function handleMouseWheel(event) {
        event = EventUtil.getEvent(event);
        var delta = EventUtil.getWheelDelta(event);
    }

    EventUtil.addHandler(document, "mousewheel", handleMouseWheel);
    EventUtil.addHandler(document, "DOMMouseScroll", handleMouseEvent);

});