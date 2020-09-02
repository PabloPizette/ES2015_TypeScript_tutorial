"use strict";
// class about ForEach
/* exemple 1:
let numbers = [2, 4, 6, 8];
numbers.forEach(arrayFunction);
function arrayFunction(element, index, array) {
  console.log("arr["+index+"] = "+element);
};
*/
/* exemple 2:
let myMap = new Map([
  ["fname", 'Pablo'],
  ['lname', 'III']
]);
myMap.forEach(mapFunction);
function mapFunction(value, key, callingMap) {
  console.log(key+" "+value);
  console.log(myMap === callingMap);
}
*/
// exemple 3:
let mySet = new Set([1, 2, 3]);
mySet.forEach(setFunction);
function setFunction(value, key, callingSet) {
    console.log(key + ' ' + value);
    console.log(mySet === callingSet);
}
//# sourceMappingURL=tutorial34.js.map