"use strict";
// class about Decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
let AppComponet = class AppComponet {
};
AppComponet = __decorate([
    Component({
        selector: "my-app",
        template: '<h1>Learning the basic of Typescript and JS</h1>'
    })
], AppComponet);
exports.AppComponet = AppComponet;
//# sourceMappingURL=tutorial49.js.map