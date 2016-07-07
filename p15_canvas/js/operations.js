log_header("Canvas opeations");

var context;
var rectDrawing = document.getElementById("rectDrawing");

if (rectDrawing.getContext) {
    context = rectDrawing.getContext("2d");
    // Line
    // context.strokeStyle = "red";
    context.fillStyle = "rgba(0, 0, 255, 0.5";
    context.fillRect(10, 10, 50, 50);
    context.fillRect(30, 30, 50, 50);
    context.clearRect(40, 40, 10, 10);

    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "rgba(0, 0, 0, 0.5)";
    context.lineWidth = "5";

    context.strokeRect(90, 10, 50, 50);
    context.strokeRect(110, 30, 50, 50);
    
    var fontSize = 100;
    context.font = fontSize + " px Arial";

    while (context.measureText("Hello World!").width > 140) {
        fontSize--;
        context.font = fontSize + " px Arial";
    }

    context.fillText("Hello world!", 10, 10);
    context.fillText("Font size is " + fontSize + " px", 10, 50);
}

var clockDrawing = document.getElementById("clockDrawing");

if (clockDrawing.getContext) {
    context = clockDrawing.getContext("2d");

    context.beginPath();

    context.arc(100, 100, 99, 0, 2 * Math.PI, false);
    context.moveTo(194, 100);

    context.arc(100, 100, 94, 0, 2 * Math.PI, false);

    context.moveTo(100, 100);
    context.lineTo(100, 15);

    context.moveTo(100, 100);
    context.lineTo(35, 100);

    context.font = "bold 14px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("12", 100, 20);


    context.stroke();
}
