log_header("Dom events");

EventUtil.addHandler(window, "load", function() {

    var deleteMe = document.getElementById("deleteMe");

    EventUtil.addHandler(document, "DOMNodeRemoved", function(event) {
        event = EventUtil.getEvent(event);
        log("RelatedNode: " + event.relatedNode)
        log(event.type);
    });


    EventUtil.addHandler(document, "DOMSubtreeModified", function(event) {
        event = EventUtil.getEvent(event);
        log(event.type);
    });

    EventUtil.addHandler(deleteMe, "DOMNodeRemovedFromDocument", function(event) {
        log(event.target + " " + event.type);
    });
    
    EventUtil.addHandler(deleteMe.firstChild, "DOMNodeRemovedFromDocument", function(event) {
        log(event.target + " " + event.type);
    });

    document.body.removeChild(deleteMe);

});