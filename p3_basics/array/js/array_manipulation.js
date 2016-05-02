log_header("Array manipulation");

var colors = ["red", "green", "blue"];
log("Concat colors with \"yellow\" and [\"black\", \"brown\"]"); 
var colors2 = colors.concat("yellow", ["black", "brown"]);
log(colors);
log(colors2);

log("Slice colors2 from 1st element");
var colors3 = colors2.slice(1);
log(colors2);
log(colors3);
log("Slice colors2 from 1st to 4th element");
var colors4 = colors2.splice(1, 4);
log(colors4);

log("colors4 before splice");
log(colors4);
log("Splice colors4 delete 1st element");
var removed = colors4.splice(0, 1);
log(colors4);
log("Removed element is " + removed);

log("Insert \"yellow\" and \"orange\" from 1st position");
colors4.splice(1, 0, "yellow", "orange");
log(colors4);

log("Delete one from 1st element and insert \"red\", \"purple\"");
removed = colors4.splice(1, 1, "red", "purple");
log("Removed element is " + removed);
log("Type of removed is " + typeof removed);
log("Is the removed array? Answer: " + (removed instanceof Array) );
log(colors4);
