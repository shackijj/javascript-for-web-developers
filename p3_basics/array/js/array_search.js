log_header("Array Searching");

log("indexOf and lastIndexOf are from ECMAScript5. see caniuse");
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
log("Numbers is: (string below)");
log(numbers);

log(numbers.indexOf(4));
log(numbers.lastIndexOf(4));

log(numbers.indexOf(4, 4));
log(numbers.lastIndexOf(4, 4));


