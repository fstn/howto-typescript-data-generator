export declare const Scope: {
    FAKE: string;
    EMPTY: string;
};
export declare const Fake: (cb: (context: any, scope?: any) => {}, ...params: any[]) => PropertyDecorator;
export declare const Empty: (cb: (context: any, scope?: any) => {}, ...params: any[]) => PropertyDecorator;
export declare const getFake: (instance: any, context: any) => any;
export declare const getEmpty: (instance: any, context: any) => any;
