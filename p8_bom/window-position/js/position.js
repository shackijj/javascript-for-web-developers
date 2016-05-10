// screenX and screenY are firefox window props.

var leftPos = (typeof window.screenLeft == "number") ? 
					window.screenLeft : window.screenX;
var topPos = (typeof window.screenRight == "number") ?
					window.screenRight : window.screenY;
console.log("leftPos: " + leftPos + " topPos: " + topPos );

var winForMove = window.open('move_me.html', 'winForMove', 'left=100,top=100,width=200,height=200,location=no');

function moveToFunction () {	
	var inputs = this.form.elements,
		x = parseInt(inputs["move-to-x"].value),
		y = parseInt(inputs["move-to-y"].value);
	winForMove.moveTo(x,y);
	winForMove.focus();
};

function moveByFunction () {	
	var inputs = this.form.elements,
		x = parseInt(inputs["move-by-x"].value),
		y = parseInt(inputs["move-by-y"].value);
	winForMove.moveBy(x,y);
	winForMove.focus();
};

var moveToButton = document.getElementById("move-to-btn");
moveToButton.addEventListener("click", moveToFunction);
var moveByButton = document.getElementById("move-by-btn");
moveByButton.addEventListener("click", moveByFunction);