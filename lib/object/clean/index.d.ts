interface IOptions {
    recursive?: boolean;
    undefined?: boolean;
    null?: boolean;
    string?: boolean;
    object?: boolean;
    array?: boolean;
}
export declare function objClean(obj: object, options?: IOptions): object;
export {};
