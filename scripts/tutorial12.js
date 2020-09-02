"use strict";

// class about default function parameters
let percentBonus = () => 0.5;
let getValue = function (value = 10, bonus = value * percentBonus()) {
    console.log(value + bonus);
    console.log(arguments.length);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);
//# sourceMappingURL=tutorial12.js.map