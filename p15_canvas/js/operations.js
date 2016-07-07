log_header("Canvas opeations");

var context;
var rectDrawing = document.getElementById("rectDrawing");

if (rectDrawing.getContext) {
    context = rectDrawing.getContext("2d");
    // Line
    // context.strokeStyle = "red";

    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowColor = "rgba(0, 0, 0, 0.5)"
    context.shadowBlur = 5;

    context.fillStyle = "rgba(0, 0, 255, 0.5)";
    context.fillRect(10, 10, 50, 50);
    context.fillRect(30, 30, 50, 50);
    context.clearRect(40, 40, 10, 10);

    context.globalCompositeOperation = "source-over";
    // context.globalCompositeOperation = "source-in";
    // context.globalCompositeOperation = "source-out";
    // context.globalCompositeOperation = "source-atop";
    // context.globalCompositeOperation = "destination-over";
    // context.globalCompositeOperation = "destination-in";
    // context.globalCompositeOperation = "destination-out";
    // context.globalCompositeOperation = "destination-atop";
    // context.globalCompositeOperation = "lighter";
    // context.globalCompositeOperation = "сору";
    // context.globalCompositeOperation = "xor";

    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "rgba(0, 0, 0, 0.5)";
    context.lineWidth = "5";

    context.strokeRect(90, 10, 50, 50);
    context.strokeRect(110, 30, 50, 50);
    

    context.strokeStyle = "rgba(0, 0, 0, 1)";
    context.lineWidth = "1";
    context.strokeRect(10, 110, 140, 50);

    var fontSize = 200;
    context.font = fontSize + "px Arial";

    while (context.measureText("Hello World!").width > 140) {
        fontSize--;
        context.font = fontSize + "px Arial";
    }

    context.fillText("Hello World", 11, 111 + fontSize);
    context.fillText("Font size is " + fontSize + " px", 10, 200);
}

var clockDrawing = document.getElementById("clockDrawing");

if (clockDrawing.getContext) {
    context = clockDrawing.getContext("2d");

    context.beginPath();

    context.arc(100, 100, 99, 0, 2 * Math.PI, false);
    context.moveTo(194, 100);

    context.arc(100, 100, 94, 0, 2 * Math.PI, false);

    /*
    context.moveTo(100, 100);
    context.lineTo(100, 15);

    context.moveTo(100, 100);
    context.lineTo(35, 100);

    context.font = "bold 14px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("12", 100, 20);
    */

    context.translate(100, 100);

    context.rotate(1);

    context.moveTo(0, 0);
    context.lineTo(0, -85);

    context.moveTo(0, 0);
    context.lineTo(-65, 0);
    context.stroke();
}

var saveRestoreDrawing = document.getElementById("saveRestoreDrawing");

if (saveRestoreDrawing.getContext) {
    context = saveRestoreDrawing.getContext("2d");

    context.beginPath();

    // blue
    context.fillStyle = "rgba(0, 0, 255, 0.5)";
    context.save();
    // red
    context.fillStyle = "rgba(0, 255, 0, 0.5)";
    context.save();
    // green
    context.fillStyle = "rgba(255, 0, 0, 0.5)";
    // draw red
    context.fillRect(10, 10, 50, 50);

    // draw green
    context.restore();
    context.fillRect(50, 10, 50, 50);

    // draw blue
    context.restore();
    context.fillRect(30, 50, 50, 50);
}

var gradientDrawing = document.getElementById("gradientDrawing");
if (gradientDrawing.getContext) {

    context = gradientDrawing.getContext("2d");
    context.beginPath();

    var linearGradient = context.createLinearGradient(30, 30, 70, 70);

    linearGradient.addColorStop(0, "white");
    linearGradient.addColorStop(1, "black");

    var radialGradient = context.createRadialGradient(85, 85, 10, 85, 85, 30);
    radialGradient.addColorStop(0, "red");
    radialGradient.addColorStop(1, "green");

    context.fillStyle = linearGradient;
    context.fillRect(10, 10, 50, 50);

    context.fillStyle = radialGradient;
    context.fillRect(60, 60, 50, 50);
}