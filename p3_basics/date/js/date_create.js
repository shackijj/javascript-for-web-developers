log_header("Creating date instance");

var now = new Date();
log("Current date is " + now);

// excplicit form
var someDate1 = new Date(Date.parse("May 25, 2014"));
// implicit form
var someDate2 = new Date("May 25, 2014");

log(someDate1);
log(someDate2);
log( "Are they equal as strings? " + (someDate1.toString() == someDate2.toString())); 

var timestamp1 = Date.UTC(2000, 0);
log(timestamp1);
var someDate3 = new Date(timestamp1);
log(someDate3);

// year, month(from nil), day, hours, minuts, seconds, milliseconds
var timestamp2 = Date.UTC(2016, 4, 2, 14, 26, 00, 00);
log(timestamp2);
var someDate3 = new Date(timestamp2);
log(someDate3);

// Parameters are of Date the same as Date.UTC,
// but format is GMT (local).
var someDate4 = new Date(2016, 4, 2, 14, 26, 00, 00);
log(someDate4);

//ECMAScript 5 method

var start1 = Date.now();
for (var i = 0; i < 1000; i++) {}
var stop1 = Date.now(),
    result1 = stop1 - start1;
log("Cycle took " + result1 + " ms");

// Old browsers
// plus sign converts object to number 
var start2 = +new Date();
for(var i = 0; i < 1000; i++) {}
var stop2 = +new Date(),
    result2 = stop2 - start2;
log("Old cycle tool " + result2 + " ms");

log("toString() " + someDate4.toString());
log("toLocaleString() " + someDate4.toLocaleString());

// Comapasion 

var someDate5 = new Date(2016, 0, 1);
var someDate6 = new Date(2016, 4, 1);
var someDate7 = new Date(2016, 0, 1);

log("Must be false: " +  (someDate5 > someDate6));
log("Must be true: " + (someDate5 < someDate6));
log("Must be true: " + (someDate5 == someDate7));
