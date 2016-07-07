log_header("Array reduction");

var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function(prev, cur, index, array) {
    return prev + cur;
});

log(sum);

var sumRight = values.reduce(function(prev, cur, index, array) {
    return prev + cur;
});

log(sumRight);
