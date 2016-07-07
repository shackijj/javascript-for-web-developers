log_header("Interval and timeout");

// Bad style
// setTimeout("alert('Hello Bad style Timeout')", 1000);

// Ok
var timeoutId = setTimeout(function() {
	console.log("Good timeout");
}, 3000);

log("TimeoutId: " + timeoutId);
clearTimeout(timeoutId);

//Bad style
//setInterval("console.log('Bad interval style')", 1000);

var intervalId = setInterval(function() {
	console.log("Good interval style");
}, 1000);

log("IntervalId: " + intervalId);

clearInterval(intervalId);


// Usage example

var num = 0,
	max = 10,
	intervalId = null;

function incrementNumber() {
	num++;
	
	if (num == max) {
		clearInterval(intervalId);
		console.log("Done!");
	} else {
		console.log(num);
	}
}

// intervalId = setInterval(incrementNumber, 500);

// Timeout alternative. The author says that it's better to avoid using intervals at all.

function incrementNumberByTimeout() {
	num++;
	
	if (num < max) {
		console.log(num);
		setTimeout(incrementNumberByTimeout, 500);
	} else {
		console.log("Done!");
	}
}

setTimeout(incrementNumberByTimeout);