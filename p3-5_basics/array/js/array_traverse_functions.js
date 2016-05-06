log_header("Array traverse functions");
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
log(numbers);

log(".every checks if the given function returns true on each element");
var everyResult = numbers.every( function(item, index, array) {
    return (item > 2);
});

log("Every element is > 2? Answer: " + everyResult);

log(".filter returns an array of the elements on which a given function returned true");
var filterResult = numbers.filter( function(item, index, array) {
    return (item > 2);
});

log("Elements of the numbers which are > 2");
log(filterResult);

log(".forEach call a given function on each element");
log("Increment each element of numbers");
numbers.forEach( function(item, index, array) {
    array[index] += 1;
});

log(numbers);

log(".map returns an array with results of function call on each element");
var mapResult = numbers.map( function(item, index, array) {
    return (item > 3);
});
log("Is an element of the numbers > 3?");
log(mapResult);

log(".some returns true if at least one function call returned true");
var someResult = numbers.some( function(item, index, array) {
    return (item === 2);
});

log("Is there an element equal 2 in the numbers? Answer: " + someResult);
