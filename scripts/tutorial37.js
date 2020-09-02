"use strict";
// class about Symbol Iterator
let str = "Hi";
let arr = [1, 2, 3];
let num = 5;
let obj = {
    name: 'Pablo'
};
console.log("For string - " + typeof str[Symbol.iterator]); // can be use in a for loop
console.log("For array - " + typeof arr[Symbol.iterator]); // can be use in a for loop
console.log("For number - " + typeof num[Symbol.iterator]); // can't be use in a for loop
console.log("For object - " + typeof obj[Symbol.iterator]); // can't be use in a for loop
//# sourceMappingURL=tutorial37.js.map