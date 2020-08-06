import {GeneratorMetadataArgsStorage} from "./GeneratorMetadataArgsStorage";

export function getGeneratorMetadataArgsStorage(): GeneratorMetadataArgsStorage {
    if (!(global as any).generatorMetadataArgsStorage)
        (global as any).generatorMetadataArgsStorage = new GeneratorMetadataArgsStorage();

    return (global as any).generatorMetadataArgsStorage;
}
