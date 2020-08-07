"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGeneratorMetadataArgsStorage = void 0;
const GeneratorMetadataArgsStorage_1 = require("./GeneratorMetadataArgsStorage");
function getGeneratorMetadataArgsStorage() {
    if (!global.generatorMetadataArgsStorage)
        global.generatorMetadataArgsStorage = new GeneratorMetadataArgsStorage_1.GeneratorMetadataArgsStorage();
    return global.generatorMetadataArgsStorage;
}
exports.getGeneratorMetadataArgsStorage = getGeneratorMetadataArgsStorage;
//# sourceMappingURL=global.js.map