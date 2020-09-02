"use strict";

// class about lexical this
var employee = {
    id: 1,
    greet: function () {
        setTimeout(() => { console.log(this.id); }, 100);
    }
};
employee.greet();
//# sourceMappingURL=tutorial11.js.map