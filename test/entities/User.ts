import * as faker from "faker";
import {Fake} from "../context";
import {Owner} from "./Owner";

export class User extends Owner{
    @Fake(faker.internet.email)
    login!: string;
    @Fake(faker.internet.password,10)
    password!: string;
}
