interface ResponseInterface {
  data: Array<object>;
  page: number;
  totalPerPage: number;
  totalDocument: number;
  totalPage: number;
}

export function responsePaginate(data: Array<object>, page: number, totalPerPage: number, totalDocument: number) {
  const response: ResponseInterface = {
    data: data,
    page: page,
    totalPerPage: totalPerPage,
    totalDocument,
    totalPage: Math.ceil(totalDocument / totalPerPage),
  };

  return response;
}
