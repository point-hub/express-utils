interface ResponseInterface {
    data: Array<object>;
    page: number;
    totalPerPage: number;
    totalDocument: number;
    totalPage: number;
}
export declare function responsePaginate(data: Array<object>, page: number, totalPerPage: number, totalDocument: number): ResponseInterface;
export {};
