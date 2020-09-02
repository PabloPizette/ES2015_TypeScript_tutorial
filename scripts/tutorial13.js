"use strict";

// class about rest operator
let displayColors = function (message, ...colors) {
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let message = "List of Colors";
displayColors(message, "red");
displayColors(message, "red", "blue");
displayColors(message, "red", "blue", "green");
//# sourceMappingURL=tutorial13.js.map