import {GeneratorPropertyMetadataArgs} from "./GeneratorPropertyMetadataArgs";
import {getGeneratorMetadataArgsStorage} from "./global";


export const getValueForProperty = (scope?: string) => (target: any, meta: GeneratorPropertyMetadataArgs, context: any) => {
    const cb = meta.callBack;
    const params = meta.params || []
    if (cb !== undefined) {
        return cb(...params, context, scope)
    } else {
        return null
    }
}

export const get = (scope?: string) => (instance: any, context: any) => {
    const allMeta = getGeneratorMetadataArgsStorage()
    const classMeta: GeneratorPropertyMetadataArgs[] = allMeta.properties
        .filter((p: GeneratorPropertyMetadataArgs) =>
            (Object.getPrototypeOf(instance)?.constructor.toString() == p.target.toString() &&
            (scope === p.scope || !p.scope)) ||
        (Object.getPrototypeOf(Object.getPrototypeOf(instance)||{})?.constructor.toString() == p.target.toString() &&
            (scope === p.scope || !p.scope)) ||
        (Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance))||{})?.constructor.toString() == p.target.toString() &&
            (scope === p.scope || !p.scope)) ||
            (Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance)||{})||{})||{})?.constructor.toString() == p.target.toString() &&
                (scope === p.scope || !p.scope)) ||
            (Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance) ||{})||{})||{})||{})?.constructor.toString() == p.target.toString() &&
                (scope === p.scope || !p.scope)) ||
            (Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance)||{}) ||{})||{})||{})||{})?.constructor.toString() == p.target.toString() &&
                (scope === p.scope || !p.scope))||
            (Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance)||{})||{}) ||{})||{})||{})||{})?.constructor.toString() == p.target.toString() &&
                (scope === p.scope || !p.scope)))
    for (const meta of classMeta) {
        const value = getValueForProperty(scope)(instance, meta, context)
        if (value || value === false) {
            instance[meta.propertyName] = value
        }
    }
    return instance
}

