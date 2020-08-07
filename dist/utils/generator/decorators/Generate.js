"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generate = void 0;
const global_1 = require("../global");
exports.Generate = (scope) => (cb, ...params) => {
    return function (object, propertyName) {
        global_1.getGeneratorMetadataArgsStorage().properties.push({
            scope: scope,
            target: object.constructor,
            propertyName: propertyName,
            callBack: cb,
            params: params
        });
    };
};
//# sourceMappingURL=Generate.js.map