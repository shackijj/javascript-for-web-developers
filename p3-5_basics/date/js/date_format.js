log_header("Date format functions");

var dtf = new Date(2016, 4, 2);
log(".toDateString() " + dtf.toDateString());
log(".toTimeString() " + dtf.toTimeString());
log(".toLocaleDateString() " + dtf.toLocaleDateString());
log(".toLocaleTimeString() " + dtf.toLocaleTimeString());
log(".toUTCString() " + dtf.toUTCString());
