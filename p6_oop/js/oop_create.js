log_header("OOP: Createing objects");

var person1 = new Object();
// name attrs: [[Configarable]] - true , [[Enumerable]] - true
//             [[Writable]] - true, [[Value]] - "Kirill"
person1.name = "Kirill";
person1.age = 26;
person1.job = "Software Enginner";

person1.sayName = function () {
	console.log(this.name);
}

var person2 = {
	name: "Sveta",
	age: 25,
	job: "System administator",
	sayName: function () {
		console.log(this.name);
	}
}

person1.sayName();
person2.sayName();

// Expicit form
var person3 = {};
Object.defineProperty(person3, "name", {
	writable: false,
	value: "Nicholas"
});

person3.name = "Zuzu";
log(person3.name);

var person4 = {};
Object.defineProperty(person4, "name", {
	configurble: false,
	value: "Greg"
});

log(person4.name);
delete person4.name;
log(person4.name);

// Error
/*
Object.defineProperty(person4, "name", {
	configurable: true,
	value: "Greg"
});
*/

var book = {
	_year: 2014,
	edition: 1
};

Object.defineProperty(book, "year", {
	// configurable and enumerable are optional
	get: function() {
		return this._year;
	},
	set: function (newValue) {
		if (newValue > 2004) {
			this._year = newValue;
			this.edition += 1;
		}
	}
});

book.year = 2015;
log(book.year);
log(book.edition);

// Old style for browsers which don't support ECMAScript5
var article = {
	_year : 2014,
	edition: 1
}

article.__defineGetter__("year", function () {
	return this._year;
});

article.__defineSetter__("year", function (newValue) {
	if (newValue > 2014) {
		this._year = newValue;
		this.edition += 1;
	}
});

log(article.year);
article.year = 2015;
log(article.year);
log(article.edition);

var programm = {};
Object.defineProperties(programm, {
	// writable are false by default!!! Chrome 50.0.2661.94m and Firefox 45.0.2
	_year: {
		value: 2014,
		writable: true
	},
	version: {
		value: 1.0,
		writable: true
	},
	year: {
		get: function () {
			return this._year;
		},
		
		set: function(newValue) {
			if (newValue > this._year) {
				this._year = newValue;
				this.version += 1;
			}
		}
	}
});

log(programm.version);
programm.year = 2015;
log(programm.year);
log(programm.version);