"use strict";
// Class about Weaksets, going more deep.
let set = new WeakSet();
let key = {};
set.add(key);
console.log(set.has(key));
key = null;
//# sourceMappingURL=tutorial31.js.map