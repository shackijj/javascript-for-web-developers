(function () {
    function draw (timestamp) {

        var drawStart = Date.now(),
            diff = drawStart - startTime,
            inc = 2;

        div.style.width = (parseInt(div.style.width, 10) + inc) + "%";

        //log(div.style.width);
        if (div.style.width != "100%") {
            requestAnimationFrame(draw);
        } 
    }

    var startTime = Date.now(),
        div = document.getElementById("status");

    div.style.width = "0%";
    requestAnimationFrame(draw);
}());

(function () {
    function handleVisibilityChange () {
        if (hidden) {
            log("Page is now hidden. " + new Date());
        } else {
            log("Page is now visible. " + new Date());
        }
    }

    var visibilityChange,
        hidden;

    if (typeof document.hidden !== "undefined") {
        visibilityChange = "visibilitychange";
        hidden = document.hidden;
    } else if (typeof document.msHidden !== "undefined") {
        visibilityChange = "msvisibilitychange";
        hidden = document.msHidden;
    } else if (typeof document.mozHidden !== "undefined") {
        visibilityChange = "mozvisibilitychange";
        hidden = document.mozHidden;
    }  else if (typeof document.webkitHidden !== "undefined") {
        visibilityChange = "webkitvisibilitychange";
        hidden = document.webkitHidden;
    }

    EventUtil.addHandler(document, visibilityChange, handleVisibilityChange);
}());

(function () {
    var filelist = document.getElementById("filelist");

    EventUtil.addHandler(filelist, "change", function(event) {
        var files = EventUtil.getTarget(event).files,
            i = 0,
            len = files.length;

        while (i < len) {
            log(files[i].name + " (" + files[i].type + ", " + files[i].size + ")" );
            i++;
        }
    });
}());