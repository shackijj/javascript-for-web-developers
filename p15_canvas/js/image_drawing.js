log("image_drawing.js");

var imageDrawing = document.getElementById("imageDrawing");

if (imageDrawing.getContext) {
    var context = imageDrawing.getContext("2d"),
    image, imageData, data,
    i, len, average,
    red, green, blue, alpha;

    image = document.images[0];

    context.drawImage(image, 0, 0);

    imageData = context.getImageData(0, 0, image.width, image.height);

    data = imageData.data;

    for (i = 0, len = data.length; i < len; i += 4) {
        red = data[i];
        green = data[i+1];
        blue = data[i+2];
        alpha = data[i+3];

        average = Math.floor((red + blue + green) / 3);
        data[i] = average;
        data[i+1] = average;
        data[i+2] = average;
    }

    imageData.data = data;
    context.putImageData(imageData, 0, 0);
}