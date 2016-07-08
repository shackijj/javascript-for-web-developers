log_header("history.js");

EventUtil.addHandler(window, "load", function () {
    history.pushState({name : "p16_html5"}, "Page about 16th chapter", "index.html#foo");
    log("Pushed");
});