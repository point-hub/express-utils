interface ResponseInterface {
    data: Array<object>;
    page: number;
    totalPerPage: number;
    totalDocument: number;
    totalPage: number;
}
export declare const responsePaginate: (data: Array<object>, page: number, totalPerPage: number, totalDocument: number) => ResponseInterface;
export {};
