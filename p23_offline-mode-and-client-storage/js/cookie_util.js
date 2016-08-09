var CookieUtil = {
    get: function(name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);

            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }

            cookieValue = decodeURIComponent(document.cookie.substring(
                cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },

    set: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" +
            encodeURIComponent(value);

        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path; 
        }

        if (domain) {
            cookieText += "; domain=" + domain;
        }

        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    },

    unset: function (name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }
};

var SubCookieUtil = {

    // name=name1=value1&name2=value2;
    // name=name1=value1;

    get: function(name, subName) {
        var rc = null,
            all = this.getAll(name);

        if (all.hasOwnProperty(subName)) {
            rc = all[subName];
        }

        return rc;
    },

    getAll: function(name) {

        var cookieName = name + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieEnd,
            subCookieValues = {},
            subCookieText,
            keyValue;

 
        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(";", cookieStart);

            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }

            subCookieText = decodeURIComponent(document.cookie.substring(
                cookieStart + cookieName.length, cookieEnd));
            
            var values = subCookieText.split("&");

            for (var i = 0, len = values.length; i < len; i++) {
                keyValue = values[i].split("=");
                subCookieValues[keyValue[0]] = keyValue[1];
            }
        }
        return subCookieValues;

    },

    set: function(name, subName, value, expires, path, domain, secure) {
        var all = this.getAll(name);
        
        all[subName] = value;

        this.setAll(name, all, value, expires, path, domain, secure);
    },

    setAll: function(name, subcookies, expires, path, domain, secure) {
        var cookieValue = encodeURIComponent(name) + "=",
            subCookieText = "",
            key, value;

        for (key in subcookies) {
            if (key.length > 0 && subcookies.hasOwnProperty(key)) {
                if (subCookieText !== "") {
                    subCookieText += "&";
                }

                subCookieText += key + "=" + subcookies[key];
            }
        }

        if (subCookieText.length > 0) {
            cookieValue = cookieValue + encodeURIComponent(subCookieText);
        }

        if (expires instanceof Date) {
            cookieValue += "; expires=" + expires.toGMTString();
        }

        if (path) {
            cookieValue += "; path=" + path;
        }

        if (domain) {
            cookieValue += "; domain=" + domain;
        }

        if (secure) {
            cookieValue += "; secure";
        }

        document.cookie = cookieValue;
    },

    unset: function(name, subName, path, domain, secure) {
        var all = this.getAll(name);
        
        if (all.hasOwnProperty(subName)) {
            delete all[subName];
            this.setAll(name, all, null, path, domain, secure);
        }
    },

    unsetAll: function(name, path, domain, secure) {
        this.setAll(name, {}, new Date(0), path, domain, secure);
    }

};