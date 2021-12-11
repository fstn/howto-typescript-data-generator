"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Owner_1 = require("./entities/Owner");
const generator_1 = require("../src/utils/generator");
const context_1 = require("./context");
const User_1 = require("./entities/User");
describe(`Test for generator`, () => {
    it('Generator should generate Orange for Fake data context', async () => {
        const ownerWithFakeData = context_1.getFake(new Owner_1.Owner(), { color: "black" });
        expect(ownerWithFakeData.firstName).not.toBeUndefined();
        expect(ownerWithFakeData.lastName).not.toBeUndefined();
        expect(ownerWithFakeData.car.color).toBe("black");
    });
    it('Generator should generate Orange for ORANGE_CAR data context', async () => {
        const ownerWithOrangeCar = generator_1.get("ORANGE_CAR")(new Owner_1.Owner(), {});
        expect(ownerWithOrangeCar.car.color).toBe("orange");
    });
    it('Generator should generate super properties', async () => {
        const user = context_1.getFake(new User_1.User(), { color: "black" });
        expect(user.firstName).not.toBeUndefined();
        expect(user.lastName).not.toBeUndefined();
        expect(user.car.color).toBe("black");
    });
});
//# sourceMappingURL=generate.spec.js.map