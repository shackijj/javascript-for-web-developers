function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subproperty;
};

SubType.prototype.getSuperValue = function() {
    return false;
};

// We can't use litertal's here because it overwrite line 13 code!!!
/*
Subtype.prototype = {
    getSubValue: function() 
    ...
*/

var instance = new SubType();
var super_instance = new SuperType();



log(instance.getSuperValue());
log(instance.getSubValue());

log(instance instanceof Object);
log(instance instanceof SuperType);
log(instance instanceof SubType);

log(Object.prototype.isPrototypeOf(instance));
log(SuperType.prototype.isPrototypeOf(instance));
log(SubType.prototype.isPrototypeOf(instance));

log(instance.getSuperValue());
log(super_instance.getSuperValue());



// Pattern problem (It's common problem about the prototype)

function Parent() {
    this.colors = ["red", "green"];
}

function Child() {
}

Child.prototype = new Parent();

var i1 = new Child();
var i2 = new Child();

i1.colors.push("yellow");

log(i1.colors);
log(i2.colors);
