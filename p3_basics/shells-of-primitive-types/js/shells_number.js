log_header("Shells: number");

var numberObj = new Number(10);

var num = 10;
log("toString");
log(num.toString());
log(num.toString(2));
log(num.toString(8));
log(num.toString(10));
log(num.toString(16));

log("toFixed");
log(num.toFixed(2));

num = 10.005;
log(num.toFixed(2));

log("toExponential");
log(num.toExponential(1));
log(num.toExponential(2));
log(num.toExponential(3));
log(num.toExponential(4));


log("ToPrecision");
num = 99;

log(num.toPrecision(1));
log(num.toPrecision(2));
log(num.toPrecision(3));
log(num.toPrecision(4));

log(typeof numberObj);
log(typeof num);
log(numberObj instanceof Number);
log(num instanceof Number);