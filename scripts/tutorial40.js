"use strict";
// class about Generators
/*
Exemplo do generator, is using in here, on the last class code, tha t I copied and pasted here
function* createGenerator() {
  yield 1;
  console.log('After 1st yield');
  yield 2;
}
let myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
*/
let person = {
    fname: "Chandler",
    lname: "Bing"
};
person[Symbol.iterator] = function* () {
    let properties = Object.keys(person);
    for (let t of properties) {
        yield this[t];
    }
};
for (let p of person) {
    console.log(p);
}
//# sourceMappingURL=tutorial40.js.map