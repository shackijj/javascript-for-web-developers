log_header("Selectors, Traversal API");

var body = document.querySelector("body");
var wrapper = document.querySelector("#wrapper");
var article = document.querySelector(".art");
var img = document.querySelector("img.images");

var articles = document.querySelectorAll(".art");
log("Lenfth of articles: " + articles.length);
log("Is articles NodeList?: " + (articles instanceof NodeList));

log("body.childElementCount" + body.childElementCount);
log("body.firstElementChild: " + body.firstElementChild);
log("body.lastElementChild: " + body.lastElementChild);
log("body.previousElementSibling: " + body.previousElementSibling);
log("body.nextElementSibling: " + body.nextElementSibling);

var i,
	len,
	child = wrapper.firstElementChild;
while(child != wrapper.lastElementChild) {
	log(child.tagName);
	child = child.nextElementSibling;
}