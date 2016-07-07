log_header("Buffer events");

var myForm = document.getElementById("myForm");
var textField = myForm.elements["text-field"];
var submitBtn = myForm.elements["submit-btn"];

EventUtil.addHandler(textField, "paste", function(event) {
    event = EventUtil.getEvent(event);
    var text = EventUtil.getClipboardText(event);

    if (!/^\d*$/.test(text)) {
        EventUtil.preventDefault(event);
    }
});

EventUtil.addHandler(submitBtn, "click", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    event.preventDefault();

    var myForm = document.getElementById("myForm");
    var hiddenField = myForm.elements['hidden-field'];

    hiddenField.value = "Kokojambo";

});

EventUtil.addHandler(document, "copy", function(event) {
    EventUtil.setClipboardText(event, "Wow");
    var text = EventUtil.getClipboardText(event);

    console.log("Clipboard text is: " + text);
});