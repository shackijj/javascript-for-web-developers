log_header("Keyboard events");
var mytext = document.getElementById("myText");

EventUtil.addHandler(mytext, "keypress", function(event) {
    event = EventUtil.getEvent(event);

    var charCode = EventUtil.getCharCode(event);

    log("char code: " + charCode + " symbol: " + String.fromCharCode(charCode) );
});

EventUtil.addHandler(mytext, "keypress", function(event) {
    event = EventUtil.getEvent(event);

    if (event.getModifierState) {
        log("Is shift pressed?: " + event.getModifierState("Shift"));
    }

});

EventUtil.addHandler(mytext, "textInput", function(event) {
    event = EventUtil.getEvent(event);

    log("Event data from textInput event: " + event.data );
});