interface ResponseInterface {
    code: number;
    message: string;
    info?: object;
}
export declare function responseError(code: number, message: string, info?: object): ResponseInterface;
export {};
