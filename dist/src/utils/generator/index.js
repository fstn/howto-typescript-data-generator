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
        .filter((p) => {
        var _a, _b, _c, _d, _e, _f, _g;
        return (((_a = Object.getPrototypeOf(instance)) === null || _a === void 0 ? void 0 : _a.constructor.toString()) == p.target.toString() &&
            (scope === p.scope || !p.scope)) ||
            (((_b = Object.getPrototypeOf(Object.getPrototypeOf(instance) || {})) === null || _b === void 0 ? void 0 : _b.constructor.toString()) == p.target.toString() &&
                (scope === p.scope || !p.scope)) ||
            (((_c = Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance)) || {})) === null || _c === void 0 ? void 0 : _c.constructor.toString()) == p.target.toString() &&
                (scope === p.scope || !p.scope)) ||
            (((_d = Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance) || {}) || {}) || {})) === null || _d === void 0 ? void 0 : _d.constructor.toString()) == p.target.toString() &&
                (scope === p.scope || !p.scope)) ||
            (((_e = Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance) || {}) || {}) || {}) || {})) === null || _e === void 0 ? void 0 : _e.constructor.toString()) == p.target.toString() &&
                (scope === p.scope || !p.scope)) ||
            (((_f = Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance) || {}) || {}) || {}) || {}) || {})) === null || _f === void 0 ? void 0 : _f.constructor.toString()) == p.target.toString() &&
                (scope === p.scope || !p.scope)) ||
            (((_g = Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance) || {}) || {}) || {}) || {}) || {}) || {})) === null || _g === void 0 ? void 0 : _g.constructor.toString()) == p.target.toString() &&
                (scope === p.scope || !p.scope));
    });
    for (const meta of classMeta) {
        const value = exports.getValueForProperty(scope)(instance, meta, context);
        if (value || value === false) {
            instance[meta.propertyName] = value;
        }
    }
    return instance;
};
//# sourceMappingURL=index.js.map