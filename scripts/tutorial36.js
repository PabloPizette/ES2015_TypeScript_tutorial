"use strict";
// class about Symbols
// No matter what, the Symbol() only creats a unique symbol
let s1 = Symbol("First Symbol");
console.log(typeof s1);
console.log(s1.toString());
let s2 = Symbol("Second Symbol");
let s3 = Symbol("Third Symbol");
console.log(s2 === s3);
let s4 = Symbol.for("RegisterSymbol");
let s5 = Symbol.for("RegisterSymbol");
console.log(s4 === s5);
console.log(Symbol.keyFor(s4));
let fname = Symbol("FirstName");
let person = {
    [fname]: "Pablo"
};
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
//# sourceMappingURL=tutorial36.js.map