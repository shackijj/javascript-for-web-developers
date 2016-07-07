var client = function () {
	var engine = {
		// visualizators
		ie: 0,
		gecko: 0,
		webkit: 0,
		khtml: 0,
		opera: 0,
		// version
		ver: null
	};
	
	var browser = {
		ie: 0,
		firefox: 0,
		safari: 0,
		konq: 0,
		opera: 0,
		chrome: 0,
		ver: null
	};
	
	var system = {
		win: false,
		mac: false,
		x11: false,
		// mobiles
		iphone: false,
		ipod: false,
		ipad: false,
		ios: false,
		android: false,
		nokiaN: false,
		winMobile: false,
		// game platforms
		wii: false,
		ps: false
	};
	
	// Code
	
	// Let's start with Opera
	
	var ua = navigator.userAgent;
	
	if(window.opera) {
		// Short, but weird...
		engine.ver = browser.version = window.opera.version();
		engine.opera = browser.version = parseFloat(engine.ver);
	} else if (/AppleWebKit\/(\S+)/.test(ua)) {
		engine.ver = RegExp["$1"];
		engine.webkit = parseFloat(engine.ver);
		
		// Safari or Chrome?
		
		if (/Chrome\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.chrome = parseInt(browser.ver);
		} else if (/Version\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.safari = parseInt(browser.ver);
		} else {
			var safariVersion = 1;
			if (engine.webkit < 100) {
				safariVersion = 1;
			} else if (engine.webkit < 312) {
				safariVersion = 1.2;
			} else if (engine.webkit < 412) {
				safariVersion = 1.3;
			} else {
				safariVersion = 2;
			}
			
			browser.safari = safariVersion;
		}
	} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
		engine.ver = browser.ver = RegExp["$1"];
		engine.khtml = browser.konq = parseFloat(engine.ver);
	} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
		engine.ver = RegExp["$1"];
		engine.gecko = parseInt(engine.ver);
		
		if(/Firefox\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.firefox = parseInt(browser.ver);
		}
		
	} else if (/MSIE ([^;]+)/.test(ua) || /Trident.*rv:([^\);]+)/.test(ua)) {
		engine.ver = browser.ver = RegExp["$1"];
		engine.ie = browser.ie = parseFloat(engine.ver);
	}
	
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p.indexOf("X11") == 0) || (p.indexOf("Linux") == 0);
	
	if (system.win) {
		if(/Win(?:dows)?\s?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
			if(RegExp["$1"] == "NT") {
				switch(RegExp["$2"]) {
					case "5.0":
						system.win = "2000";
						break;
					case "5.1":
						system.win = "XP";
						break;
					case "6.0":
						system.win = "Vista";
						break;
					case "6.1":
						system.win = "7";
						break
					default:
						system.win = "NT";
						break;
				}
			} else if (RegExp["$1"] == "9x") {
				system.win = "ME";
			} else {
				system.win = RegExp["$1"];
			}
		}
	}

	if (system.win == "CE") {
		system.winMobile = system.win;
	} else if (system.win == "Ph") {
		if (/Windows Phone OS (\d+\.\d+)/.test(ua)) {
			system.win = "Phone";
			system.winMobile = parseFloat(RegExp["$1"]);
		}
	}
	
	system.iphone = ua.indexOf("iPhone") > -1;
	system.ipad = ua.indexOf("iPad") > -1;
	system.ipod = ua.indexOf("iPod") > -1;
	
	if (system.mac && ua.indexOf("Mobile")) {
		if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
			system.ios = parseFloat(RegExp["$1"].replace("_", "."));
		} else {
			system.ios = 2;
		}
	}
	
	if (/Android  (\d+\.\d+)/.test(ua)) {
		system.android = parseFloat(RegExp["$1"]);
	}
	
	system.nokiaN = ua.indexOf("NokiaN") > -1;

	system.wii = ua.indexOf("Wii") > -1;
	system.ps = /playstation/i.test(ua);
	
	return {
		engine : engine,
		browser: browser,
		system: system
	};
	
}();

// IE Testcases from https://msdn.microsoft.com/ru-ru/library/hh869301%28v=vs.85%29.aspx
// Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko
// Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; Tablet PC 2.0)
// Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537
// Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)

function ieTest(ua) {
	if (/MSIE ([^;]+)/.test(ua) || /Trident.*rv:([^\);]+)/.test(ua)) {
		console.log(RegExp["$1"]);
	}
}

log(client)