log_header("Device events");

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
    EventUtil.addHandler(window, "deviceorientation", function(event) {
        divOrient.innerHTML = "alpha =" + event.alpha + ", beta =" + event.beta +
                            ", gamma=" + event.gamma; 
    });
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