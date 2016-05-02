log_header("Array as stack");

var stack_colors = new Array();
var count = stack_colors.push("red", "green");
console.log(count);

stack_colors.push("black");
console.log(count);

var item = stack_colors.pop();
console.log(item);
console.log(stack_colors);
