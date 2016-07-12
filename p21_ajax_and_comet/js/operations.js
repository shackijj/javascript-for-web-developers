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
