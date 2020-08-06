import {Car} from "./Car";
import * as faker from "faker";
import {Generate} from "../../src/utils/generator/decorators/Generate";
import {get} from "../../src/utils/generator";
import {Fake} from "../context";

export class Owner{
    @Fake(faker.name.firstName)
    firstName!: string;
    @Fake(faker.name.lastName)
    lastName!: string;
    @Generate()((context:any,scope:any)=>get(scope)(new Car(),context))
    car!: Car;
}
