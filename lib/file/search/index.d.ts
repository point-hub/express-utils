interface IPath {
    key: string;
    path: string;
    deep: number;
}
interface IOptions {
    maxDeep?: number;
    regExp?: boolean;
}
export declare function fileSearch(name: string, dir: string, options?: IOptions): Promise<IPath[]>;
export {};
