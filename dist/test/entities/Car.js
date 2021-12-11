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
exports.Car = void 0;
const Generate_1 = require("../../src/utils/generator/decorators/Generate");
const faker = require("faker");
const context_1 = require("../context");
class Car {
}
__decorate([
    Generate_1.Generate("ORANGE_CAR")(() => "orange"),
    context_1.Fake((context) => context.color || faker.random.arrayElement(["blue", "red"])),
    __metadata("design:type", String)
], Car.prototype, "color", void 0);
__decorate([
    Generate_1.Generate(context_1.Scope.FAKE)(faker.company.companyName, 8),
    __metadata("design:type", String)
], Car.prototype, "brand", void 0);
exports.Car = Car;
//# sourceMappingURL=Car.js.map