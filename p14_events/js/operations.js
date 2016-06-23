var colorsForm = document.getElementById("colorsForm");
var colorsFields = colorsForm.elements["color"];
log("Colors fields len: " + colorsFields.length);

var firstColorFields = colorsFields[0];
var firstFormField = colorsForm.elements[0];

log("firstColorFields == firstFormField: " + 
    (firstColorFields == firstFormField));

var myForm = document.getElementById("myForm");

var myFormTextField = myForm.elements['text-field'];
var myFormSmartField = myForm.elements['smart-field'];
log("myFormTextField.form == myForm: " + 
    (myFormTextField.form == myForm));

var testDigitsOnly = function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    if(/[^\d]/.test(target.value)) {
        target.style.border = "1px solid red";
    } else {
        target.style.border = "";
    }
};

function selectText(textbox, startIndex.,)

EventUtil.addHandler(myFormTextField, "blur", testDigitsOnly);
EventUtil.addHandler(myFormTextField, "change", testDigitsOnly);
EventUtil.addHandler(myForm, "submit", function(event) {
    var event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    var btn = target.elements["submit-btn"];
    btn.disable = true;

});

EventUtil.addHandler(window, "load", function(event) {
    document.forms["myForm"].elements[0].focus();
});

EventUtil.addHandler(myForm, "reset", function(event) {
    var event = EventUtil.getEvent(event);

    EventUtil.preventDefault(event);
});

EventUtil.addHandler(myFormTextField, "focus", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    target.select();
});
// Crossbrowser
EventUtil.addHandler(myFormTextField, "select", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event),
        text;

    if (typeof target.selectionStart == "number") {
        text = target.value.substring( 
            target.selectionStart, target.selectionEnd);
    } else if (target.selected) {
        // IE6-8
        text = target.selected.createRange().text;
    }

    log("Selected text is: '" + text + "'");
});
EventUtil.addHandler()