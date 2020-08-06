import {GeneratorPropertyMetadataArgs} from "../GeneratorPropertyMetadataArgs";
import {getGeneratorMetadataArgsStorage} from "../global";


export const Generate = (scope?: string) =>
    (cb: (context: any, scope?: any) => {}, ...params: any[]): PropertyDecorator => {
        return function (object: Object, propertyName: string | symbol) {
            getGeneratorMetadataArgsStorage().properties.push({
                scope: scope,
                target: object.constructor,
                propertyName: propertyName,
                callBack: cb,
                params: params
            } as GeneratorPropertyMetadataArgs);
        };
    }
