function log_header(name) {
    console.log( "-------------" + name + "--------------");
}

// I'm lazy, dont wanna type console.log evety time....
function log(msg) {
    console.log(msg);
}

function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}