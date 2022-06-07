import { responsePaginate } from "./index.js";

describe("response", function () {
  it("paginate", function () {
    const data = [
      {
        name: "John Doe",
        age: 35,
      },
      {
        name: "Jane",
        age: 26,
      },
    ];
    const totalDocument = 2;
    const page = 1;
    const totalPerPage = 10;
    const result = responsePaginate(data, page, totalPerPage, totalDocument);
    expect(result).toEqual({
      data: data,
      page: page,
      totalPerPage: totalPerPage,
      totalPage: Math.ceil(totalDocument / totalPerPage),
      totalDocument: totalDocument,
    });
  });
});
