export interface IObjClean {
    (obj: object, options?: IOptions): object;
}
export interface IOptions {
    recursive?: boolean;
    undefined?: boolean;
    null?: boolean;
    string?: boolean;
    object?: boolean;
    array?: boolean;
}
export declare const objClean: IObjClean;
