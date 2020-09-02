"use strict";
// In this class, I'm trainning Export and Import.
// In this case, Named Export
/** ModuleB.js export exemple
 *
 * class about export and import
let fname = "Pablo";
let lname = "III";

let obj = {
    name: "Ianderson"
}

console.log('Module B Loaded');


export {fname, lname, obj};
 */
/** ModuleA.js import exemple
 *
 * class about export and import
import {fname, lname, obj} from './moduleB.js';

obj.name = 'Pizette';

console.log(`${fname} ${lname} ${obj.name}`);

*/ 
//# sourceMappingURL=tutorial26.js.map