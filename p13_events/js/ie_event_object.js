log_header("IE event object");


var btn = document.getElementById("myBtn");
btn.onclick = function() {
    var event = window.event;
    log(event.type);
};

if (btn.attachEvent) {
    btn.attchEvent("onclick", function(event) {
        log(event.type);
        // (boolean) read\write stopPropagation analog
        log(event.cancelBubble);
        // preventDefault analog
        log(event.returnValue);
        log(event.srcElement);
    });
}