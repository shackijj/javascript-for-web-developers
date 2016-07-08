log_header("operations.js");

function process(array) {

    if (!(array instanceof Array)) {
        throw new Error("process(): argument must be an array.");
    }

    array.sort();

    for(i = 0, len = array.length; i < len; i++) {
        array[i] = array[i] - 1;
    }

    return array;
} 

function logError(sev, msg) {
    var img = new Image();
    img.src = "log.php?sev=" + encodeURIComponent(sev) +
        "&msg=" + encodeURIComponent(msg); 
}

try {
    window.someNonExistentFunction();
} catch(error) {
    if (error instanceof TypeError) {
        log("Type error occured");
    } else {
        log("Error message: " + error.message);
    }
}

try {
    throw new SyntaxError("Ow! Wrong syntax!");
} catch (error) {
    log("Oops!: " + error.message );
    logError("fatal", error.message);
}

function CustomError (message) {
    this.name = "Custom Error";
    this.message = message;
}

CustomError.prototype = new Error();

// throw new CustomError("yayaya cocojambo!");