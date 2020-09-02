"use strict";
// class about spread operator
let displayColors = function (message, ...colors) {
    console.log(message);
    // console.log(colors);
    // console.log(arguments.length);
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let message = "List of Colors";
let colorArray = ["Orange", "Yellow", "Indigo"];
displayColors(message, ...colorArray);
// displayColors(message, "red");
// displayColors(message, "red", "blue");
// displayColors(message, "red", "blue", "green");
//# sourceMappingURL=tutorial14.js.map