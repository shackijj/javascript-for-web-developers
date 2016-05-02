log_header("RegExp properties");

log("Literal notation");
var pattern1 = /\[bc\]at/i;

log(pattern1.global);
log(pattern1.ignoreCase);
log(pattern1.multiline);
log(pattern1.lastIndex);
log(pattern1.source);

log("Constructor notation");
var pattern2 = new RegExp("\\[bc\\]at", "i");

log(pattern2.global);
log(pattern2.ignoreCase);
log(pattern2.multiline);
log(pattern2.lastIndex);
log(pattern2.source);
