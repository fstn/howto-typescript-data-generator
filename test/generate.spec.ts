import {Owner} from "./entities/Owner";
import {get} from "../src/utils/generator";
import {getFake} from "./context";
import {User} from "./entities/User";

describe(`Test for generator`, () => {

    it('Generator should generate Orange for Fake data context', async () => {
        const ownerWithFakeData = getFake(new Owner(), {color: "black"})
        expect(ownerWithFakeData.firstName).not.toBeUndefined()
        expect(ownerWithFakeData.lastName).not.toBeUndefined()
        expect(ownerWithFakeData.car.color).toBe("black")
    })

    it('Generator should generate Orange for ORANGE_CAR data context', async () => {
        const ownerWithOrangeCar = get("ORANGE_CAR")(new Owner(), {})
        expect(ownerWithOrangeCar.car.color).toBe("orange")
    })

    it('Generator should generate super properties', async () => {
        const user = getFake(new User(), {color: "black"})
        expect(user.firstName).not.toBeUndefined()
        expect(user.lastName).not.toBeUndefined()
        expect(user.car.color).toBe("black")
    })
})
