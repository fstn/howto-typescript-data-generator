"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmpty = exports.getFake = exports.Empty = exports.Fake = exports.Scope = void 0;
const Generate_1 = require("../src/utils/generator/decorators/Generate");
const generator_1 = require("../src/utils/generator");
exports.Scope = {
    FAKE: "FAKE",
    EMPTY: "EMPTY"
};
exports.Fake = Generate_1.Generate(exports.Scope.FAKE);
exports.Empty = Generate_1.Generate(exports.Scope.EMPTY);
exports.getFake = generator_1.get(exports.Scope.FAKE);
exports.getEmpty = generator_1.get(exports.Scope.EMPTY);
//# sourceMappingURL=context.js.map