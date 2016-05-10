log_header("OOP: Constructor stealing");

function SuperType() {
	this.colors = ["red", "blue", "green"];
}

function SubType () {
	SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");

var instance2 = new SuperType();

log(instance1.colors);
log(instance2.colors);

function Human(name) {
	this.name = name;
}

function Employee(name, job) {
	Human.call(this, name);
	this.job = job;
}

var employee = new Employee("Greg", "Lamberjack");
log(employee.name);
log(employee.job);