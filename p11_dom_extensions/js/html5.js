log_header("HTML5 DOM API");

var articles = document.getElementsByClassName("art");
log(articles.length);
log("NodeList?: " + (articles instanceof NodeList));
log("HTMLCollection: " + (articles instanceof HTMLCollection));

var span = document.querySelector(".alpha");
var spanClasses = span.className.split(/\s+/);
log(spanClasses);

var pos = -1,
	i,
	len;
for (i = 0, len=spanClasses.length; i < len; i++) {
	if (spanClasses[i] == "beta") {
		pos = i;
		break;
	}
}

//delete one element of array from pos
spanClasses.splice(pos, 1);

span.className = spanClasses.join(" ");

log(span.className);

// Simple way
// Chome and firefox only

span.classList.remove("gamma");
span.classList.add("wow");
span.classList.toggle("may");

if (span.classList.contains("wow") && span.classList.contains("may")) {
	log("Cool it works!");
}

var button = document.getElementById("test-button");
button.focus();
log(button === document.activeElement);
log("Does document have a focus?: " + document.hasFocus());


log("document.readyState: " + document.readyState);

// HTML5 defines doucment.head 
var head = document.head || document.getElementsByTagName("head")[0];
log("What is charset?: " + document.charset);

// dataset feature

log(span.dataset.feature);

// innerHTML HTML5 Only?
var content = document.getElementById("content");
content.innerHTML = "Hello innerHTML"

log(content.outerHTML);

content.insertAdjacentHTML("beforebegin", "<p>Before Begin contnent</p>");
content.insertAdjacentHTML("afterbegin", "<p>After Begin content</p>");
content.insertAdjacentHTML("beforeend", "<p>Before end</p>");
content.insertAdjacentHTML("afterend", "<p>After end</p>");