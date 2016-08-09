
log_header("Functions.js");

(function() {
/* Type detection

It works only with embeded types.

*/
function isArray(value) {
    return Object.prototype.toString.call(value) == "[object Array]";
}

function isRegExp(value) {
    return Object.prototype.toString.call(value) == "[object RegExp]";
}

function isFunction(value) {
    return Object.prototype.toString.call(value) == "[object Function]";
}

assert(isArray([1,2]) === true, "Oops, Wrong type detections");
}());

(function() {
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }


    function SecurePerson(name, age, job) {
        if (this instanceof SecurePerson) {
            this.name = name;
            this.job = job;
            this.age = age;
        } else {
            return new SecurePerson(name, age, job);
        }
    }

    function Polygon(sides) {
        if (this instanceof Polygon) {
            this.sides = sides;
            this.getArea = function() {
                return 0;
            };
        } else {
            return new Polygon(sides);
        }
    }

    function Rectangle(width, height) {
        Polygon.call(this, 2);
        this.width = width;
        this.height = height;
        this.getArea = function() {
            return this.width * this.height;
        };
    }

    Rectangle.prototype = new Polygon();

    // Oops!
    var person = Person("Nicholas", 29, "Software Engineer"),
        securePerson = SecurePerson("Sheby", 31, "Engineer"),
        rect = new Rectangle(5, 10);


    assert(window.name === "Nicholas", "window dosn't have a name");
    assert(person == undefined, "Person is object!");
    assert(securePerson.name === "Sheby", "Secret person is not Sheby");
    assert(rect.sides == 2, "rect sides is not undefine");
}());

(function() {
    // Lazy loading

    var createXHR = (function () {
        if (typeof XMLHttpRequest != "undefined") {
            return function() {
                return new XMLHttpRequest();
            }
        } else if (typeof ActiveXObject != "undefined") {
            return function() {
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
            };
        } else {
            return function() {
                throw new Error("AjaxUtil.createXHR: No XHR object available");
            }
        }
    }());
}());

(function() {
    // Function binding

    function bind(fn, context) {
        return function() {
            fn.apply(context, arguments);
        }
    }

    var handler = {
        message: "Event handled",

        handleClick: function(event) {
            alert(this.message);
        }
    };

    var btn = document.getElementById('click_me');
    /*
    Closure
    EventUtil.addHandler(btn, "click", function(event) {
        handler.handleClick(event);
    });
    */


    /*
    ES5
    EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler));
    */

    // EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler));
}());

(function() {
    function curry(fn) {
        // Pop first arg and create closure
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            var innerArgs = Array.prototype.slice.call(arguments),
                finalArgs = args.concat(innerArgs);
            // fn Closure!
            return fn.apply(null, finalArgs);
        };
    }

    function bind(fn, context) {
        var args = Array.prototype.slice.call(arguments, 2);
        return function() {
            var innerArgs = Array.prototype.slice.call(arguments);
                finalArgs = args.concat(innerArgs);
            
            return fn.apply(context, finalArgs);
        }
    } 

    function add(num1, num2) {
        return num1 + num2;
    }

    var curriedAdd = curry(add, 1);
    console.log(curriedAdd(3)); // 4

    var handler = {
        message: "Event handled",
        clickHandler: function(name, event) {
            alert(this.message + ":" + name  + ":" + event.type);
        }
    };

    var btn = document.getElementById('click_me');

    EventUtil.addHandler(btn, "click", bind(handler.clickHandler, handler, "click_me"));
}());

(function() {
    // ES5 only
    var person = {name: "Nicholas"};

    Object.preventExtensions(person);    
    assert(Object.isExtensible(person) !== true, "Person must be not extensible");
    delete person.name;
    assert(person.name == undefined, "person.name wasn't be deleted");

    var sealedPerson = {name: "Sheby"};

    Object.seal(sealedPerson);
    sealedPerson.age = 29;
    delete sealedPerson.name;
    assert(sealedPerson.name === "Sheby", "sealedPerson.name must be Sheby");
    assert(sealedPerson.age === undefined, "person is extensibe, but mustn't be");

    var freezedPerson = {name: "Nicholas"};
    Object.freeze(freezedPerson);
    freezedPerson.age = 29;
    assert(freezedPerson.age === undefined, "freezed obj can't be extended");
    assert(delete freezedPerson.name === false, "freezed obj's props cant be deleted");
    freezedPerson.name = "Greg";
    assert(freezedPerson.name === "Nicholas", "freezed obj can't be changed");
}());

(function() {
    // Repeating Timer

    setTimeout(function() {
        var div = document.getElementById('flying-div'),
            left = parseInt(div.style.left) + 5;
            
            if (left < 200) {
                div.style.left = left + "px";
                setTimeout(arguments.callee, 30);
            }
    }, 30);

    // data chunking

    function chunk(array, process, context) {
        setTimeout(function() {
            var item = array.shift();
            process.call(context, item);

            if (array.length > 0) {
                setTimeout(arguments.callee, 100);
            }
        }, 100);
    }

    var data = [1, 2, 3, 4 , 5];

    function printValue(item) {
        var div = document.getElementById('flying-div');
        div.innerHTML += item + "<br>";
    }

    chunk(data, printValue);

}());

(function () {

    function throttle(method, context) {
        clearTimeout(method.tId);

        method.tId = setTimeout(function() {
            method.call(context);
        }, 100);
    }

    var processor = {
        timeoutId: null,

        performProcessing: function() {
            log(window.innerHeight + "x" + window.innerWidth);
        },

        process: function() {
            clearTimeout(this.timeoutId);

            var that = this;

            this.timeoutId = setTimeout(function() {
                that.performProcessing();
            }, 100);
        }
    };

    // EventUtil.addHandler(window, "resize", processor.process.bind(processor));
}());