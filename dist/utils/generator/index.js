"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.getValueForProperty = void 0;
const global_1 = require("./global");
exports.getValueForProperty = (scope) => (target, meta, context) => {
    const cb = meta.callBack;
    const params = meta.params || [];
    if (cb !== undefined) {
        return cb(...params, context, scope);
    }
    else {
        return null;
    }
};
exports.get = (scope) => (instance, context) => {
    const allMeta = global_1.getGeneratorMetadataArgsStorage();
    const classMeta = allMeta.properties
        .filter((p) => instance.constructor.toString() == p.target.toString() &&
        (scope === p.scope || !p.scope));
    for (const meta of classMeta) {
        const value = exports.getValueForProperty(scope)(instance, meta, context);
        if (value || value === false) {
            instance[meta.propertyName] = value;
        }
    }
    return instance;
};
//# sourceMappingURL=index.js.map