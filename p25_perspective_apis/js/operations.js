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

    function blobSlice(blob, startByte, length) {
        if (blob.slice) {
            return blob.slice(startByte, length);
        } else if (blob.webkitSlice) {
            return blob.webkitSlice(startByte, length);
        } else if (blob.mozSlice) {
            return blob.mozSlice(startByte, length);
        } else {
            return null;
        }
    }

    function createObjectURL(blob) {
        if (window.url) {
            return window.URL.createObjectURL(blob);
        } else if (window.webkitURL) {
            return window.webkitURL.createObjectURL(blob);
        } else {
            return null;
        }
    }

    function revokeObjectURL(url) {
        if (window.URL) {
            window.URL.revokeObjectURL(url);
        } else if (window.webkitURL) {
            window.webkitURL.revokeObjectURL(url);
        }
    }

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

    /* 
    EventUtil.addHandler(filelist, "change", function(event) {
        var info = "",
            output = document.getElementById("output"),
            progress = document.getElementById("progress"),
            files = EventUtil.getTarget(event).files,
            type = "default",
            reader = new FileReader();

        if (/image/.test(files[0].type)) {
            reader.readAsDataURL(files[0]);
            type = "image";
        } else {
            reader.readAsText(files[0]);
            type = "text";
        }

        reader.onerror = function() {
            output.innerHTML = "Could not read file. Err: " + reader.errorCode; 
        };

        reader.onprogress = function() {
            if (event.lengthComputable) {
                progress.innerHTML = event.loaded + "/" + event.total;
            }
        };

        reader.onload = function() {
            var html = "";

            switch(type) {
                case "image":
                    html += "<img src=\"" + reader.result + "\">";
                    break;
                case "text":
                    html = reader.result;
                    break;
            }

            output.innerHTML = html;
        };
    });
    */

    EventUtil.addHandler(filelist, "change", function(event) {
        var info = "",
            output = document.getElementById("output"),
            progress = document.getElementById("progress"),
            files = EventUtil.getTarget(event).files,
            reader = new FileReader,
            url = createObjectURL(files[0]);

        if (url) {
            if (/image/.test(files[0].type)) {
                output.innerHTML = "<img src=\"" + url + "\"/>";
            }
        } else {
            throw {
                name: "createObjectUR",
                message: "Browser doesn't support createObjectURL"
            };
        }
    });

    /*
    EventUtil.addHandler(filelist, "change", function(event) {
        var info = "",
            output = document.getElementById("output"),
            progress = document.getElementById("progress"),
            files = EventUtil.getTarget(event).files,
            reader = new FileReader,
            blob = blobSlice(files[0], 0, 32);

        if (blob) {
            reader.readAsText(blob);

            reader.onerror = function() {
                output.innerHTML = "Could not read file. Err: " + reader.errorCode; 
            };

            reader.onload = function() {
                output.innerHTML = reader.result;
            };
        } else {
            throw {
                name: "BLOB ERROR",
                message: "Browser doesn't support slice()"
            };
        }
    });
    */
}());

(function() {

    var droptarget = document.getElementById("droptarget");

    function handleEvent(event) {
        var info = "",
            output = document.getElementById("output"),
            files, len, i;

        EventUtil.preventDefault(event);

        if (event.type == "drop") {
            files = event.dataTransfer.files;
            i = 0;
            len = files.length;

            while (i < len) {
                info += files[i].name + " (" + files[i].type + ", " +
                        files[i].size + " B)<br>";
                i++;
            }

            output.innerHTML = info;
        }
    }

    EventUtil.addHandler(droptarget, "dragenter", handleEvent);
    EventUtil.addHandler(droptarget, "dragover", handleEvent);
    EventUtil.addHandler(droptarget, "drop", handleEvent);

}());