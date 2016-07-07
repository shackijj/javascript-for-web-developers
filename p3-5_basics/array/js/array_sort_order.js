log_header("Array order and sort");

var values = [1, 2, 3, 4, 5];
values.reverse();
log(values);

values = [0, 1, 5, 10, 15];
log("values before " + values);
values.sort();
log("String based sorting by default .sort()");
log(values);
log("values after " + values);

function compare(a, b) {
    return a - b;
}

log("Let's use compare function.");

values = [0, 1, 5, 10, 15];
log("values before " + values);

values.sort(compare);
log("values after " + values);
