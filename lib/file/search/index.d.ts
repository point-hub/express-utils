interface IPath {
    key: string;
    path: string;
    deep: number;
}
export declare function fileSearch(name: string, dir: string, maxDeep?: number): Promise<IPath[]>;
export {};
