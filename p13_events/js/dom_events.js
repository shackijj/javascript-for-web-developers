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

EventUtil.addHandler(window, "load", function() {
    var insertMe = document.getElementById("insertMe"),
        item = document.createElement("li");

    item.appendChild(document.createTextNode("4"));

    EventUtil.addHandler(document, "DOMSubtreeModified", function(event) {
        log(event.type);
        log(event.target);
    });

    EventUtil.addHandler(document, "DOMNodeInserted", function(event) {
        log(event.type);
        log(event.target);
        log(event.relatedNode);
    });

    EventUtil.addHandler(item, "DOMNodeInsertedIntoDocument", function(event) {
        log(event.type);
        log(event.target);
    });

    insertMe.appendChild(item);

});