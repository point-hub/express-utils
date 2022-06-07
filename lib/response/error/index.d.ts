interface ResponseInterface {
    code: number;
    message: string;
    info?: object;
}
export declare const responseError: (code: number, message: string, info?: object) => ResponseInterface;
export {};
