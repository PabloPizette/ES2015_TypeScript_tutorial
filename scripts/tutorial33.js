"use strict";
// class about iterating over Maps
let myMap = new Map([
    ['fname', 'Pablo'],
    ['lname', 'III']
]);
for (let [key, value] of myMap.entries()) {
    console.log(`${key} -> ${value}`);
}
for (let value of myMap.values()) {
    console.log(value);
}
for (let key of myMap.keys()) {
    console.log(key);
}
//# sourceMappingURL=tutorial33.js.map