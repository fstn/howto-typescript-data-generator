import {Generate} from "../src/utils/generator/decorators/Generate";
import {get} from "../src/utils/generator";

export const Scope = {
    FAKE: "FAKE",
    EMPTY: "EMPTY"
}

export const Fake = Generate(Scope.FAKE)
export const Empty = Generate(Scope.EMPTY)

export const getFake = get(Scope.FAKE)
export const getEmpty = get(Scope.EMPTY)
