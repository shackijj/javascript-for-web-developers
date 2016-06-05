EventUtil.addHandler(window, "load", function(event) {
    var div = document.getElementById("myDiv");

    EventUtil.addHandler(div, "contextmenu", function(event) {
        event = EventUtil.getEvent(event);

        EventUtil.preventDefault(event);

        var menu = document.getElementById("contextMenu");
        menu.style.left = event.clientX + "px";
        menu.style.top = event.clientY + "px";
        menu.style.visibility = "visible";
    });

    EventUtil.addHandler(document, "click", function(event) {
        document.getElementById("contextMenu").style.visibility = "hidden";
    });


    EventUtil.addHandler(window, "beforeunload", function(event) {
        event = EventUtil.getEvent(event);
        var msg = "I'm gonna miss you";
        event.returnValue = msg;
        return msg;
    });
});


EventUtil.addHandler(document, "DOMContentLoaded", function(event) {
    log("Content loaded");
});