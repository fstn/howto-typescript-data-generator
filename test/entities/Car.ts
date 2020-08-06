import {Generate} from "../../src/utils/generator/decorators/Generate";
import * as faker from "faker"
import {Fake, Scope} from "../context";

export class Car {

    @Generate("ORANGE_CAR")(()=> "orange")
    @Fake((context:any)=>context.color || faker.random.arrayElement(["blue","red"]))
    public color!: string;

    @Generate(Scope.FAKE)( faker.company.companyName,8)
    public brand!: string;
}
