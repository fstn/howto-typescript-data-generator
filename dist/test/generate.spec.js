"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Owner_1 = require("./entities/Owner");
const generator_1 = require("../src/utils/generator");
const context_1 = require("./context");
describe(`Test for generator`, () => {
    it('Generator should generate Orange for Fake data context', async () => {
        const ownerWithFakeData = context_1.getFake(new Owner_1.Owner(), { color: "black" });
        expect(ownerWithFakeData.firstName).not.toBeNull();
        expect(ownerWithFakeData.lastName).not.toBeNull();
        expect(ownerWithFakeData.car.color).toBe("black");
    });
    it('Generator should generate Orange for ORANGE_CAR data context', async () => {
        const ownerWithOrangeCar = generator_1.get("ORANGE_CAR")(new Owner_1.Owner(), {});
        expect(ownerWithOrangeCar.car.color).toBe("orange");
    });
});
//# sourceMappingURL=generate.spec.js.map