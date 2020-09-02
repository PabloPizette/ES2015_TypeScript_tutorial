"use strict";
// class about Maps
let myMap = new Map();
myMap.set('fname', 'Pablo');
myMap.set('age', 33);
console.log(myMap.get('fname'));
console.log(myMap.get('age'));
let obj1 = {};
let obj2 = {};
myMap.set(obj1, 10);
myMap.set(obj2, 20);
console.log(myMap.get(obj1));
myMap.delete('fname');
myMap.clear();
console.log(myMap.size);
console.log(myMap.has('fname'));
//# sourceMappingURL=tutorial32.js.map