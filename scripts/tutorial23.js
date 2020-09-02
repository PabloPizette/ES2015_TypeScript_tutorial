"use strict";
// class about class inheritance
class Person {
    constructor(name) {
        console.log(name + " Person constructor");
    }
    getID() {
        return 10;
    }
}
class Employee extends Person {
    constructor(name) {
        super(name);
        console.log(name + " Employee Constructor");
    }
    getID() {
        return super.getID();
    }
}
let employee = new Employee("Pablo");
console.log(employee.getID());
//# sourceMappingURL=tutorial23.js.map