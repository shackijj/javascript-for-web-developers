log_header("OOP: Reading attributes of properties");

var book = {};

Object.defineProperties(book, {
	_year: {
		value: 2014
	},
	
	edition: {
		value: 1
	},
	
	year: {
		get: function () {
			return this._year;
		},
		
		set: function (newValue) {
			if (newValue > this._year) {
				this._year = newValue;
				this.edition += 1;
			}
		}
	}
})

log("_year attributes");
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
log(descriptor.value);
log(descriptor.writable);
log(descriptor.configurable);
log(descriptor.enumerable);
log(descriptor.set);
log(descriptor.get);

log("year attributes");
descriptor = Object.getOwnPropertyDescriptor(book, "year");
log(descriptor.value);
log(descriptor.writable);
log(descriptor.configurable);
log(descriptor.enumerable);
log(descriptor.set);
log(descriptor.get);