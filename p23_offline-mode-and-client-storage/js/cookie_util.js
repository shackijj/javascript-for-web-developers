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
                    cookieStart + cookieName, cookieEnd));

                var values = subCookieText.split("&");

                for (var i = 0, len = values.length; i < len; i++) {
                    keyValue = values[i].split("=");
                    // DO THIS NEXT TIME
                }
            }

        return subCookieValues;

    },

    set: function(name, subName, value, expires, path, domain, secure) {

    },

    setAll: function(name, subcookies, expires, path, domain, secure) {

    },

    unset: function(name, subName) {

    },

    unsetAll: function(name) {

    }

};