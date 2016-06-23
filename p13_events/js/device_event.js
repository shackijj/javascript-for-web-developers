log_header("Device events");

function handleTouchEvent(event) {
    if(event.touches.length == 1) {
        var output = document.getElementById("touchDiv");
        switch(event.type) {
            case "touchstart":
                output.innerHTML = "Touchstarted (" +
                    event.touches[0].clientX + "," +
                    event.touches[0].clientY + ")";
            break;
            case "touchend":
                output.innerHTML += "<br>Touch ended (" + 
                    event.touches[0].clientX + "," +
                    event.touches[0].clientY + ")";
            break;
            case "touchmove":
                event.preventDefault(); // disable scroll
                output.innerHTML += "<br> Touch moved (" + 
                    event.changedTouches[0].clientX + "," +
                    event.changedTouches[0].clientY + ")";
            break;
        }
    }
}


function handleGestureEvent(event) {
    var output = document.getElementById("touchDiv");
    switch(event.type) {
        case "gesturestart":
             output.innerHTML = "Gesture started (rotation=" +
                event.rotation + ",scale=" + 
                event.scale + ")";
        break;
        case "gestureend":
             output.innerHTML = "<br> Gesture ended (rotation=" +
                event.rotation + ",scale=" + 
                event.scale + ")";
        break;
        case "gesturechange":
             output.innerHTML = "<br> Gesture changed (rotation=" +
                event.rotation + ",scale=" + 
                event.scale + ")";
        break;
    }
}


EventUtil.addHandler(document, "touchstart", handleTouchEvent);
EventUtil.addHandler(document, "touchend", handleTouchEvent);
EventUtil.addHandler(document, "touchmove", handleTouchEvent);


// IOS only
EventUtil.addHandler(document, "guesturestart", handleGestureEvent);
EventUtil.addHandler(document, "guestureend", handleGestureEvent);
EventUtil.addHandler(document, "guesturechange", handleGestureEvent);


EventUtil.addHandler(window, "load", function(event) {
    var div = document.getElementById("deviceDiv");
    div.innerHTML = "Current orientation is " + window.orientation;

    var divMoz = document.getElementById("deviceDivMoz");

    var divOrient = document.getElementById("deviceDivOrientation");

    var divMotion = document.getElementById("deviceDivMotion");

    EventUtil.addHandler(window, "orientationchange", function(event) {
        div.innerHTML = "Current orientation is: " + window.orientation;    
    });

    EventUtil.addHandler(window, "MozOrientation", function(event) {
        divMoz.innerHTML = "X=" + event.x + "Y=" + event.y + "Z=" + event.z;    
    });

    /*
    The deviceorientation event is deprecated on insecure origins, and support will be removed in the future. You should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.
    */
    
    EventUtil.addHandler(window, "deviceorientation", function(event) {
        divOrient.innerHTML = "alpha =" + event.alpha + ", beta =" + event.beta +
                            ", gamma=" + event.gamma; 
    });
    


    // Supported by devices with accelerometr
    /*
    The devicemotion event is deprecated on insecure origins, and support will be removed in the future. You should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.
    */
    EventUtil.addHandler(window, "devicemotion", function(event) {

        if (event.rotationRate !== null) {
            divOrient.innerHTML = "alpha =" + event.rotationRate.alpha + 
                                  ", beta =" + event.rotationRate.beta +
                                  ", gamma=" + event.rotationRate.gamma; 
        }
    });

});


EventUtil.addHandler(window, "load", function(event) {
    var div = document.getElementById("deviceDiv");
    div.innerHTML = "Current orientation is " + window.orientation;

    EventUtil.addHandler(window, "orientationchange", function(event) {
        div.innerHTML = "Current orientation is: " + window.orientation;    
    });
});