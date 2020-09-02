"use strict";
// Class about Sets and Maps
let mySet = Object.create(null);
mySet.id = 1;
if (mySet.id) {
    console.log("id exists");
}
let myMap = Object.create(null);
myMap.name = 'Pablo';
let val = myMap.name;
console.log(val);
myMap[100] = 'Hi';
console.log(myMap['100']);
let ob1 = {};
let ob2 = {};
myMap[ob1] = 'World';
console.log(myMap[ob1]);
console.log(myMap[ob2]);
console.log(ob1.toString());
console.log(ob2.toString());
//# sourceMappingURL=tutorial29.js.map