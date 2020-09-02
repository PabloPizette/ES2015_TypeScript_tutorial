"use strict";
// class about Enumaration
var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Brown"] = 0] = "Brown";
    EyeColor[EyeColor["Black"] = 1] = "Black";
    EyeColor[EyeColor["Blue"] = 2] = "Blue";
})(EyeColor || (EyeColor = {}));
;
let myEyeColor = EyeColor.Brown;
console.log(myEyeColor);
console.log(EyeColor[myEyeColor]);
//# sourceMappingURL=tutorial45.js.map