"use strict";
// class about weakMaps
let myMap = new WeakMap();
let obj1 = {};
myMap.set(obj1, "Pablo III");
console.log(myMap.get(obj1));
obj1 = null;
console.log(myMap.get(obj1));
//# sourceMappingURL=tutorial35.js.map