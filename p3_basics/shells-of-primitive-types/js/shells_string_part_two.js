log_header("Shells: string part two");

var text = "cat, bat, sat, fat";
var pattern = /.at/;

// Works like a pattern.exec
var matches = text.match(pattern);
log(matches.index);
log(matches[0]);
log(matches.lastIndex);

// Search first position
pattern = /at/;
var pos = text.search(pattern);
log(pos);

// Replace

var result = text.replace("at", "XXX");
log(result);

result = text.replace(/at/g, "XXX");
log(result);

// Special sequences

result = text.replace(/(.at)/g, "word ($1)");
log(result);

// Second argument could be a function
function htmlEscape(text) {
    return text.replace(/[<>&"]/g, function(match, pos, originalText) {
            switch(match) {
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "&":
                    return "&amp;";
                case "\"":
                    return "&quot;";
        }
    })
}

log(htmlEscape("<p class=\"test-class\">Hello&World!</p>"));
