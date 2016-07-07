function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    if (typeof this.sayName != "function") {
        Person.prototype.sayName = function() {
            console.log(this.name);
        };
    }
}

var friend = new Person("Kolya", 29, "Software Engeneer");
friend.sayName();
