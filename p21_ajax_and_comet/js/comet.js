(function () {
    var progressCallback = function(data) {
        log("StreamingClient Received: " + data);
    };
    var finishCallback = function(data) {
        log("StreamingClient Done!")
    };
    var clinet = AjaxUtil.createStreamingClient("streaming.php", 
        progressCallback, finishCallback);
}());

(function () {
    var src = new EventSource("myevents.php");
    src.onopen = function () {
        log("EventSource opened");
    };

    src.onmessage = function(event) {
        var data = event.data;
        log("EventSource receiver: " + data);
    }

    src.onerror = function(event) {
        log("EventSource error happened");
    }

}());