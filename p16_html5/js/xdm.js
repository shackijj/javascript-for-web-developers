log_header("xdm.js");

function sendMessage() {
    var iframeReceiver = document.getElementById("iframeReceiver").contentWindow;
    // second arg could be another
    log("Sending message");
    iframeReceiver.postMessage("Sendind message", "http://localhost:8080");
}

setTimeout(sendMessage, 3000);

EventUtil.addHandler(window, "message", function(event) {
    event = EventUtil.getEvent(event);
    
    log("Message received from: " + event.origin);
    if (event.origin == "http://localhost:8080") {
        log("Message: " + event.data);
    }
});