var EventUtils = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, event);
        } else {
            element["on" + type] = handler;
        }
    },

    removeHandler: function (element, type, handler) {
        if (element.removeElementListener) {
            element.removeElementListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler, false);
        } else {
            element["on" + type] = null;
        }
    }

};