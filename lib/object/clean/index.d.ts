export interface IObjClean {
    (obj: Record<string, unknown>, options?: IOptions): Record<string, unknown>;
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
