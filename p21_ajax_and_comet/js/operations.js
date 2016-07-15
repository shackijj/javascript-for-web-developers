(function () {     
    var xhr = AjaxUtil.createXHR();
    assert(xhr.readyState == 0, "Wrong xhr state");

    /*
    Warning from Chrome abount sync requests

    Synchronous XMLHttpRequest on the main thread is deprecated 
    because of its detrimental effects to the end user's experience.
    For more help, check https://xhr.spec.whatwg.org/.
    */
    // 3rd arg Sync/Async 
    xhr.open("get", "example.json", false);
    assert(xhr.readyState == 1, "XHR Should be initialized");

    xhr.send(null);

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        log("Sync request response: " + xhr.responseText);
    } else {
        throw new Error("Request was unsuccesful: " + xhr.status);
    }

    /*
        Author says that using xhr object many times can cause
        memory error
    */
    xhr = null;
} ());



(function () {
    xhr = AjaxUtil.createXHR();
xhr.open("get", "example.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            var headers = xhr.getAllResponseHeaders();
            log("Async request result: " + xhr.responseText);
            log("Headers: \n" + headers);
        } else {
            throw new Error("Async request was unsuccesful: " + xhr.status);
        }
    }
};
xhr.setRequestHeader("MyHeader", "Jojomojo");
xhr.send(null);
}());

(function() {
    var url = "example.data";

    url = AjaxUtil.addParamUrl(url, "book", "Javascript for web developers");
    url = AjaxUtil.addParamUrl(url, "author", "Nicholas C. Zakas");

    log(url);

    var form = document.getElementById("user-info");
    EventUtil.addHandler(form, "submit", function(event) {
        event = EventUtil.getEvent(event);
        target = EventUtil.getTarget(event);

        event.preventDefault();
        AjaxUtil.postFormData(form, "ajax_form.php");

    });
}());


// XHR Level 2

(function() {
    var xhr = AjaxUtil.createXHR();
    var form = document.getElementById("user-info");
    xhr.onreadystatechange= function() {
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                log("XHR2: " + xhr.responseText);
            } else {
                log("XHR2: Request was unsuccesful " + xhr.status);
            }
        }
    };
    xhr.open("post", "ajax_form.php", true);
//  FormData is level2 object
    xhr.send(new FormData(form));
}());

(function() {
    var xhr = AjaxUtil.createXHR();
    xhr.onreadystatechange = function() {
        try {
            if (xhr.readyState == 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    log("Timeouted" + xhr.responseText);
                } else {
                    log("Timeouted Request was unsucessful: " + xhr.status);
                }
            }
        } catch (ex) {
            // nothing
        }
    };

    xhr.ontimeout = function() {
        log("Timeout happened");
    };

    xhr.open("get", "ajax_form.php", true);
    xhr.send(null);
}());

(function() {
    var xhr = AjaxUtil.createXHR();
    xhr.open("get", "text.php", true);
    xhr.overrideMimeType("text/xml");
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if ((xhr.status == 200 && xhr.status < 300) || xhr.status == 304) {
                assert(xhr.responseXML !== null, "Got null inseted of #document");
            }
        }
    };
}());

(function () {
    var xhr = AjaxUtil.createXHR();
    xhr.onload = function() {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            log("Onload event: "  + xhr.responseText);
        } else {
            log("Onload event failed: "  + xhr.status);
        }
    };
     xhr.onprogress = function(event) {
        var divStatus = document.getElementById('status');
        if (event.lengthComputable) {
            divStatus.innerHTML = "Received " + event.position + " of " +
                event.totalSize + " bytes";
        }
    };
    xhr.open("get", "ajax_form.php", true);
    xhr.send(null);
}());

(function () {
    var request = AjaxUtil.createCORSRequest("get", "https://geocode-maps.yandex.ru/1.x/?geocode=E134.854,S25.828");
    assert(request != null, "Request is null");
    if (request) {
        request.onload = function() {
            assert(request.responseText != null,
                "Response text is null" );
        };

        request.send(null);
    }
}());

// CORS Alternative methods

// Image ping
(function () {
    var img = new Image();
    img.onload = img.onerror = function() {
        log("Image request done!");
    };

    img.src = "https://geocode-maps.yandex.ru/1.x/?geocode=E134.854,S25.828";
}());

// JSONP - Json with padding

function handleResponse(response) {
    log("Out IP: " + response.ip + "; City: " + response.city +
        ", " + response.region_name );
} 
var script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);