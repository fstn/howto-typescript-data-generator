import {Owner} from "./entities/Owner";
import {get} from "../src/utils/generator";
import {getFake} from "./context";

describe(`Test for generator`, () => {

    it('Generator should generate Orange for Fake data context', async () => {
        const ownerWithFakeData = getFake(new Owner(), {color: "black"})
        expect(ownerWithFakeData.firstName).not.toBeNull()
        expect(ownerWithFakeData.lastName).not.toBeNull()
        expect(ownerWithFakeData.car.color).toBe("black")
    })

    it('Generator should generate Orange for ORANGE_CAR data context', async () => {
        const ownerWithOrangeCar = get("ORANGE_CAR")(new Owner(), {})
        expect(ownerWithOrangeCar.car.color).toBe("orange")
    })
})
