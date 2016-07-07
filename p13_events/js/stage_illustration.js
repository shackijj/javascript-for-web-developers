log_header("Event stage illustration");

// 1 - capture, 2 - target, 3 - bubbling

var btn = document.getElementById("myBtn");

btn.addEventListener("click", function(event) {
    log("myBtn event phase: " + event.eventPhase);
}, false);

document.body.addEventListener("click", function(event) {
    log("Body event phase: " + event.eventPhase);
    // true - process event on capture stage
}, true);

document.body.onclick = function () {
    log("Body dom 0 event phase: " + event.eventPhase);
};