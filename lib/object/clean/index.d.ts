interface OptionsInterface {
    recursive?: boolean;
    undefined?: boolean;
    null?: boolean;
    string?: boolean;
    object?: boolean;
    array?: boolean;
}
export declare class ObjectClean {
    private isEmptyParent;
    recursive: boolean;
    undefined: boolean;
    null: boolean;
    string: boolean;
    object: boolean;
    array: boolean;
    constructor(options?: OptionsInterface);
    clean(obj: object): never;
    private assignOptions;
    private handle;
}
export {};
