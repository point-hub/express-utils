export const responsePaginate = (data, page, totalPerPage, totalDocument) => {
    const response = {
        data: data,
        page: page,
        totalPerPage: totalPerPage,
        totalDocument,
        totalPage: Math.ceil(totalDocument / totalPerPage),
    };
    return response;
};
