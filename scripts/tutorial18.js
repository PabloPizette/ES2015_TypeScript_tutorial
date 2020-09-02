"use strict";
// class about destructuring objects
let employee = {
    fname: "Pablo",
    lname: "III",
    gender: "Male"
};
let { fname: f, lname: l, gender: g } = employee;
// let [fname, lname, gender="Male"] = employee;
console.log(f);
console.log(l);
console.log(g);
//# sourceMappingURL=tutorial18.js.map