log_header("Working with CSS");

var supportDOM2StyleSheets = 
	document.implementation.hasFeature("StyleSheets", "2.0");

function getStyleSheet(element) {
	return element.sheet || element.styleSheet;
}

function insertRule(sheet, selectorText, cssText, position) {
	if (sheet.insertRule) {
		sheet.insertRule(selectorText + "{" + cssText + "}", position);
	} else if (sheet.addRule) {
		sheet.addRule(selectorText, cssText, position);
	}
}

function removeRule(sheet, index) {
	if (sheet.deleteRule) {
		sheet.deleteRule(index);
	} else if (sheet.removeRule) {
		sheet.removeRule(index);
	}
}

if (supportDOM2StyleSheets) {
	var sheet;
	for(var i = 0, len = document.styleSheets.length; i < len; i++) {
		sheet = document.styleSheets[i];
		log(sheet.href);
	}

	sheet = document.styleSheets[1];
	var rules = sheet.cssRules || sheet.rules;
	// Doesn't work in chrome (tested on Linux)
	if (rules) {
		var rule = rules[0];
		log("rule.selectorText: " + rule.selectorText);

		log("rule.cssText: " + rule.style.cssText);
		log("rule.backgroundColor: " + rule.style.backgroundColor);
		log("rule.width: " + rule.style.width);
		log("rule.height: " + rule.style.height);
	}

	insertRule(sheet, "body", "background-color: silver", 0);

	setTimeout(function () {
		removeRule(sheet, 0);
	}, 2000);
}