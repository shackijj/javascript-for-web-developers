log_header("Array as reverse queue");

var rq_colors = new Array();
var rq_count = rq_colors.unshift("red", "green");
console.log(rq_count);

rq_count = rq_colors.unshift("black");
console.log(rq_count);

var rq_item = rq_colors.pop();
console.log(rq_item);

console.log(rq_colors.length);
