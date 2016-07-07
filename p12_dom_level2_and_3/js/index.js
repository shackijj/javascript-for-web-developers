function log_header(name) {
    console.log("-------------" + name + "--------------");
}

// I'm lazy, dont wanna type console.log evety time....
function log(msg) {
    console.log(msg);
}

function isHostMethod(object, property) {
    var t = typeof object[property];
    return t === "function" || 
            (!!(t === "object") && object[property]) ||
            t === "unknown";
}