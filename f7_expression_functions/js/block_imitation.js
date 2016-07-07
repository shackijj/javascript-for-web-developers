function outputNumbers(count) {
	for(var i = 0; i < count; i++) {
		console.log(i);
	}
	console.log(i);
}

outputNumbers(5);

function outputNumbersBlock(count) {
	(function () {
		for (var i = 0; i < count; i++) {
			console.log(i);
		}
	});
	// Error, but it's desired behaviour
	// console.log(i);
}

outputNumbersBlock(5);