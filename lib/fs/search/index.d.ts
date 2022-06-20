interface IPath {
    key: string;
    path: string;
    deep: number;
}
export declare function fsSearch(name: string, dir: string, maxDeep?: number): Promise<IPath[]>;
export {};
