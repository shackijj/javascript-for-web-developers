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
    
}());