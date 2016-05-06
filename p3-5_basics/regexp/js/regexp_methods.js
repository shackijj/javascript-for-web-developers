log_header("RegExp methods");

var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;

var matches = pattern.exec(text);
log("RegExp source: " + pattern.source);
log("Index of match: " + matches.index);
log("Input string: " + matches.input);
log("matches[0]: " + matches[0]);
log("matches[1]: " + matches[1]);
log("matches[2]: " + matches[2]);

log("Exec method returns one match per call");

text = "bat, cat, sat, eat";

pattern = /.at/;

log("Without g index regexp always starts from pos 0");
matches = pattern.exec(text);
log("matches.index: " + matches.index);
log("matches[0]: " + matches[0]);
log("matches.lastIndex: " + pattern.lastIndex);

matches = pattern.exec(text);
log("matches.index: " + matches.index);
log("matches[0]: " + matches[0]);
log("matches.lastIndex: " + pattern.lastIndex);

log("With g flag index regexp index moves at each match");

pattern = /.at/g
while (matches = pattern.exec(text)) {
    log("matches.index: " + matches.index);
    log("matches[0]: " + matches[0]);
    log("matches.lastIndex: " + pattern.lastIndex);
}

log("Test function return boolean");

text = "123-1234-1234";
pattern = /\d{3}-\d{4}-\d{4}/;
if (pattern.test(text)) {
    log("Pattern '" + pattern.source + "' mathes string '" + text + "'");
}

log(".toLocaleString() : " + pattern.toLocaleString());
log(".toString()       : " + pattern.toString());
