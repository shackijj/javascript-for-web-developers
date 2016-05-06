log_header("RegExp constructor properties");


log("Opera doesn't support theese parameters");
var text = "this has been a short summer";
var pattern = /(.)hort/;

if (pattern.test(text)) {
    log("RegExp.input: " + RegExp.input);
    log("RegExp.leftContext: " + RegExp.leftContext);
    log("RegExp.rightContext: " + RegExp.rightContext);
    log("RegExp.lastMatch: " + RegExp.lastMatch);
    log("RegExp.lastParen: " + RegExp.lastParen);
    log("RegExp.multiline: " + RegExp.multiline);
    log("Short notation");
    log("RegExp.$_   : " + RegExp.$_);
    log("RegExp[\"$`\"]: " + RegExp["$`"]);
    log("RegExp[\"$'\"]: " + RegExp["$'"]);
    log("RegExp[\"$&\"]: " + RegExp["$&"]);
    log("RegExp[\"$+\"]: " + RegExp["$+"]);
    log("RegExp[\"$*\"]: " + RegExp["$*"]);
    log("We can access up to 9 groups in such way");
    log("RegExp.$1   : " + RegExp.$1);
}
