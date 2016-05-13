log_header("Location object");

function getQueryStringArgs() {
	// We don't nee ? sign
	var qs = (location.search.length > 0) ? 
		location.search.substring(1) : "",
		args = {},
		items = qs.length ? qs.split("&") : [],
		item = null,
		name = null,
		value = null,
		i = 0,
		len = items.length;
		
	for(i = 0; i < len; i++) {
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		
		if (name.length) {
			args[name] = value;
		}
	}
	
	return args;
}

log(getQueryStringArgs());

// Basic method
location.assign("https://google.com");
// Operations belelow use assign method
window.location = "http://yandex.ru";

location.hash = "#section1";
location.search = "?q=10";
location.hostname = "www.yahoo.com";
location.pathname = "mydir";
location.port = "8080";
// Reload page, cache - enabled
location.reload();
// Reload page from server
location.reload(true);