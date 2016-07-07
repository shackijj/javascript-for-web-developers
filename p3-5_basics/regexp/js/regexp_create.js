log_header("Creating a regexp instance");

var pattern1 = /.at/g;
var pattern2 = new RegExp(".at", "g");

var re = null,
    i;

// In ECMAScript3 the re object is created only once
// It's better to use the constructor syntax to supply wide browser support
// In ECMAScript5 both cycles are identical.
log("Literal notation");
for (i = 0; i < 10; i++) {
    re = /cat/g;
    log(re.test("catastrophe"));
}

log("Constructot notation");
for (i = 0; i < 10; i++) {
    re = new RegExp("cat", "g");
    log(re.test("catastrophe"));
}

var pattern3 = /\.at/g;
var pattern4 = new RegExp("\\.at", "g");
log(pattern3.test("ratat.at"));
log(pattern4.test("ratat.at"));
