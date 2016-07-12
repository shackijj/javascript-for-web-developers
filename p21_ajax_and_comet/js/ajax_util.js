var AjaxUtil = {
    createXHR: function () {
        if (typeof XMLHttpRequest != "undefined") {
            return new XMLHttpRequest();
        } else if (typeof ActiveXObject != "undefined") {
            if (typeof arguments.callee.activeXString != "string") {
                var versions = ["MSXML.XMLHttp6.0", "MSXML.XMLHttp6.0",
                    "MSXML.XMLHttp"],
                    i, len;

                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch(ex) {
                            // nothing
                        }
                    }

                    return new ActiveXObject(arguments.callee.activeXString);
            }
        } else {
            throw new Error("AjaxUtil.createXHR: No XHR object available");
        }
    },

    addParamUrl: function (url, key, value) {
        url += (url.indexOf("?") == -1 ? "?" : "&");
        url += encodeURIComponent(key) + "=" + encodeURIComponent(value);
        return url;
    },

    serializeForm: function(form) {
        var parts = [],
            field = null,
            i,
            len,
            j,
            optLen,
            option,
            optValue;

        for (i=0, len=form.elements.length; i < len; i++) {
            field = form.elements[i];

            switch(field.type) {
                case "select-one":
                case "select-multiple":
                    if (field.name.length) {
                        for (j=0, optLen=field.options.length; j < optLen; j++) {
                            option = field.options[j];
                            if (option.selected) {
                                optValue = "";
                                if (option.hasAttribute) {
                                    optValue = (option.hasAttribute("value") ?
                                        option.value : option.text);
                                } else {
                                    optValue = 
                                        (option.attributes["value"].specified ?
                                            option.value : option.text);
                                }
                                parts.push(encodeURIComponent(field.name) + 
                                    "=" + encodeURIComponent(optValue));
                            }
                        }
                    }
                    break;
                case undefined:
                case "file":
                case "submit":
                case "reset":
                case "button":
                    break;

                case "radio":
                case "checkbox":
                    if(!field.checked) {
                        break;
                    }
                default:
                    if (field.name.length) {
                        parts.push(encodeURIComponent(field.name) + "=" +
                            encodeURIComponent(field.value));
                    }
            }
            return parts.join("&");
        }
    },

    postFormData : function(form, url) {
        var xhr = this.createXHR();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if ((xhr.status >= 200 && xhr.status < 300) ||
                    xhr.status == 304) {
                        console.log("postForData success: " + 
                            xhr.responseText);
                } else {
                    throw new Error("AjaxUtil.postForData failed: response failed " + 
                       xhr.status );
                }
            }
        };

        xhr.open("post", url, true);
        xhr.setRequestHeader("Content-Type", "x-www-formurlencoded");
        xhr.send(this.serializeForm(form));
    }
};