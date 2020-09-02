"use strict";
// Class about Sets, going more deep.
// A set olny can have a unique value.
let mySet = new Set();
let obj1 = {};
let obj2 = {};
mySet.add('Hi');
mySet.add(1);
mySet.add(obj1);
mySet.add(obj2);
console.log(mySet.size);
let newSet = new Set([1, 2, 3, 4, 7, 7, 7]);
console.log(newSet.size);
let chainSet = new Set().add('Pablo ').add('III');
console.log(chainSet.size);
console.log(newSet.delete(2));
console.log(newSet.size);
//# sourceMappingURL=tutorial30.js.map