function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

log(factorial(5));

var anotherFactroial = factorial;
anotherFactorial = null;
// Error
// log(anotherFactorial(5));

// Better solution
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee)
	}
}

// Strict mode sulution
var yetAnotherFactorial = (function f(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * f(num - 1);
	}
});

log(yetAnotherFactorial(9));