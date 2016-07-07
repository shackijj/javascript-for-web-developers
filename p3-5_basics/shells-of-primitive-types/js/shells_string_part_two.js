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

var colorText = "green,blue,red,yellow";
var colors1 = colorText.split(",");
log(colors1);
var colors2 = colorText.split(",", 2);
log(colors2);
var colors3 = colorText.split(/[^\,]+/);
log(colors3);

var stringValue = "yellow";
log(stringValue.localeCompare("black"));
log(stringValue.localeCompare("yellow"));
log(stringValue.localeCompare("zoo"));
stringValue = "федя";
log(stringValue.localeCompare("андрей"));
log(stringValue.localeCompare("федор"));
log(stringValue.localeCompare("яков"));

log(String.fromCharCode(104, 101, 108, 108, 111));

var wrapper = document.getElementById("wrapper");
var p = document.createElement("P");

p.innerHTML += stringValue.big() + "<br>";
p.innerHTML += stringValue.bold() + "<br>";
p.innerHTML += stringValue.fixed() + "<br>";
p.innerHTML += stringValue.fontcolor("red") + "<br>";
p.innerHTML += stringValue.fontsize(24) + "<br>";
p.innerHTML += stringValue.italics() + "<br>";
p.innerHTML += stringValue.link("http://vk.com") + "<br>";
p.innerHTML += stringValue.small() + "<br>";
p.innerHTML += stringValue.strike() + "<br>";
p.innerHTML += stringValue.sub() + "<br>";
p.innerHTML += stringValue.sup() + "<br>";

wrapper.appendChild(p);