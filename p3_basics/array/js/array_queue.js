log_header("Array as queue");

var q_colors = new Array();
var q_count = q_colors.push("red", "green");
console.log(q_count);

q_count = q_colors.push("black");
console.log(q_count);

var q_item = q_colors.shift();
console.log(q_item);
console.log(q_colors.length);
