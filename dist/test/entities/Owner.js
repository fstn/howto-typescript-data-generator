"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
const Car_1 = require("./Car");
const faker = require("faker");
const Generate_1 = require("../../src/utils/generator/decorators/Generate");
const generator_1 = require("../../src/utils/generator");
const context_1 = require("../context");
class Owner {
}
__decorate([
    context_1.Fake(faker.name.firstName),
    __metadata("design:type", String)
], Owner.prototype, "firstName", void 0);
__decorate([
    context_1.Fake(faker.name.lastName),
    __metadata("design:type", String)
], Owner.prototype, "lastName", void 0);
__decorate([
    Generate_1.Generate()((context, scope) => generator_1.get(scope)(new Car_1.Car(), context)),
    __metadata("design:type", Car_1.Car)
], Owner.prototype, "car", void 0);
exports.Owner = Owner;
//# sourceMappingURL=Owner.js.map