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


    /* EventUtil.addHandler(window, "beforeunload", function(event) {
        event = EventUtil.getEvent(event);
        var msg = "I'm gonna miss you";
        event.returnValue = msg;
        return msg;
    }); */
});


EventUtil.addHandler(document, "DOMContentLoaded", function(event) {
    log("Content loaded");
});

EventUtil.addHandler(document, "readystatechange", function(event) {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        EventUtil.removeHandler(document, "readystatechange", arguments.callee);
        log("Content loaded by readystatechange.");
    }
});


// Doesnt work.
// https://msdn.microsoft.com/en-us/library/ms536957(v=vs.85).aspx
// In IE this event is depricated from 11 version
EventUtil.addHandler(window, "load", function() {
    var script = document.createElement("script");

    EventUtil.addHandler(script, "readystatechange", function(event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        if (target.readyState == "loaded" || 
            target.readyState == "complete") {
            EventUtil.removeHandler(target, "readystatechange",
                arguments.callee);
            log("Script Loaded");
        }
    });

    script.src = "js/example.js";
    document.body.appendChild(script);
});


// There are lots of typos in the book listing 
// But it doesn't work in Chrome and Firefox
EventUtil.addHandler(window, "load", function() {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";

    EventUtil.addHandler(link, "readystatechange", function(event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        if (target.readyState == "loaded" || 
            target.readyState == "complete") {
            EventUtil.removeHandler(target, "readystatechange",
                arguments.callee);
            log("Css Loaded");
        }
    });

    link.href = "index.css";
    document.getElementsByTagName("head")[0].appendChild(link);
});


EventUtil.addHandler(window, "hashchange", function(event) {
    log("Old URL: " + event.oldURL + " New Url: " + event.newURL); 
});

// Doesn't work in Chrome on linux
(function() {
    var showCount = 0;

    EventUtil.addHandler(window, "load", function() {
        log("Load fired");
    });

    EventUtil.addHandler(window, "pageshow", function(event) {
        showCount++;
        log("Show has been fired " + showCount + 
            " times. Persisted? " + event.persisted);
    });
})();