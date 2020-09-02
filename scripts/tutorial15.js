"use strict";
// class about objects literals part 1
let firstName = "Pablo";
let lastName = "III";
let person = {
    firstName,
    lastName
};
function createPerson(firstName, lastName, age) {
    let fullName = firstName + ' ' + lastName;
    return {
        firstName,
        lastName,
        fullName,
        isSenior() {
            return age > 60;
        }
    };
}
let p = createPerson("Ianderson", "Pizette", 63);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());
// console.log(person.firstName);
// console.log(person.lastName);
//# sourceMappingURL=tutorial15.js.map