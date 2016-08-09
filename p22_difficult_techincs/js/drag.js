(function() {
    /*

    Simplest method 
    EventUtil.addHandler(document, "mousemove", function(event) {
        var myDiv = document.getElementById("drag-div");
        myDiv.style.left = event.clientX + "px";
        myDiv.style.top = event.clientY + "px";
    });
    */

    function EventTarget() {
        this.handlers = {};
    }

    EventTarget.prototype = {
        constructor: EventTarget,

        addHandler: function(type, handler) {
            if (typeof this.handlers[type] == "undefined") {
                this.handlers[type] = [];
            }
            this.handlers[type].push(handler);
        },

        fire: function(event) {
            if (!event.target) {
                event.target = this;
            }

            if (this.handlers[event.type] instanceof Array) {
                var handlers = this.handlers[event.type];
                for(var i = 0, len = handlers.length; i < len; i++) {
                    handlers[i](event);
                }
            }
        },

        removeHandler: function(type, handler) {
            if (this.handlers[type] instanceof Array) {
                var handlers = this.handlers[type];

                for(var i = 0, len = handlers.length; i < len; i++) {
                    if (handlers[i] === handler) {
                        break;
                    }
                }
                // Delete 1 element from i position
                // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
                handlers.splice(i, 1);
            } 
        }
    };

    var DragDrop = function() {
        var dragging = null,
            diffX = 0,
            diffY = 0;
            dragdrop = new EventTarget();

        function handleEvent(event) {
            event = EventUtil.getEvent(event);
            var target = EventUtil.getTarget(event);
            switch (event.type) {
                case "mousedown":
                    if (target.className.indexOf("draggable") > -1) {
                        dragging = target;
                        diffX = event.clientX - target.offsetLeft;
                        diffY = event.clientY - target.offsetTop;
                        dragdrop.fire({
                            type: "dragstart", 
                            target: dragging,
                            x: event.clientX,
                            y: event.clientY
                        });
                    }
                    break;
                case "mousemove":
                    if (dragging !== null) {
                        dragging.style.left = (event.clientX - diffX) + "px";
                        dragging.style.top = (event.clientY - diffY) + "px";
                        dragdrop.fire({
                            type: "drag",
                            target: dragging,
                            x: event.clientX,
                            y: event.clientY
                        });
                    }
                    break;
                case "mouseup":
                    dragdrop.fire({
                        type: "drop",
                        target: dragging,
                        x: event.clientX,
                        y: event.clientY
                    });
                    dragging = null;

                    break;
            }
        }

        dragdrop.enable = function() {
            EventUtil.addHandler(document, "mousedown", handleEvent);
            EventUtil.addHandler(document, "mouseup", handleEvent);
            EventUtil.addHandler(document, "mousemove", handleEvent);   
        };
        dragdrop.disable = function() {
            EventUtil.removeHandler(document, "mousedown", handleEvent);
            EventUtil.removeHandler(document, "mouseup", handleEvent);
            EventUtil.removeHandler(document, "mousemove", handleEvent);   
        };

        return dragdrop;
    }();

    DragDrop.addHandler("dragstart", function(event) {
        log("Started dragging " + event.target.id);
    })

    DragDrop.addHandler("drag", function(event) {
        log("Dragget " + event.target.id + " dragged to point (" + 
            event.x + "," + event.y + ")"); 
    });

    DragDrop.addHandler("drop", function(event) {
        log("Drop " + event.target.id + " dragged to point (" + 
            event.x + "," + event.y + ")"); 
    });

    DragDrop.enable();

}()); 