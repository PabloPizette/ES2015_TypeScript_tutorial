"use strict";
// class about class body and methods
class Person {
    constructor(name) {
        this.name = name;
        console.log(this.name + " constructor");
    }
    static statisMethod() {
        console.log("Static Method");
    }
    greetPerson() {
        console.log("Hi " + this.name);
    }
}
let person = new Person("Pablo");
Person.statisMethod();
person.greetPerson();
//# sourceMappingURL=tutorial22.js.map