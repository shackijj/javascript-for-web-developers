log_header("receiver.js");

EventUtil.addHandler(window, "message", function(event) {
    event = EventUtil.getEvent(event);
    if (event.source) {
        event.source.postMessage("Recived!", "http://localhost:8080");
    }
});