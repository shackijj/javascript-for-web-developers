log_header("System windows");

if (confirm("Are you shure?")) {
	alert("You are shure :)");
} else {
	alert("You are not shure :(");
}

var result = prompt("What is yor name?", "Petya");
if (result != null) {
	console.log("You are " + result);
}

// window.find();
window.print();