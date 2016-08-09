(function() {
    // Observer pattern 

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

    // Client code
    var target = new EventTarget();

    var handleMessage = function(event) {
        log("Message receiver: " + event.message);
    }

    target.addHandler("message", handleMessage);

    target.fire({
        type: "message",
        message: "Hello EventTarget"
    });

    target.removeHandler("message", handleMessage);

    target.fire({
        type: "message",
        message: "Hello EventTarget"
    });

    
    function inheritPrototype(C, P) {
        function F() {}
        F.prototype = P.prototype;
        C.prototype = new F();
    }
    
    
    function Person(name, age) {
        // Stealing constructor
        EventTarget.call(this);
        this.name = name;
        this.age = age;
    }

    inheritPrototype(Person, EventTarget);

    Person.prototype.say = function(message) {
        this.fire({
            type : "message",
            message: message
        });
    };

    var handlePersonMessage = function(event) {
        log(event.target.name + ": " + event.message);
    }

    var person = new Person("Nicholas", 29);
    person.addHandler("message", handlePersonMessage);
    person.say("Yayaye Kokojambo");

    assert(EventTarget.prototype.say === undefined, "inheritPerson is incorrect");

}());