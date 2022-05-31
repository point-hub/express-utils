import { responseError } from "@src/index.js";

describe("response", function () {
  it("error without additional info", function () {
    const code = 404;
    const message = "Not Found";
    const result = responseError(code, message);
    expect(result).toEqual({
      code: code,
      message: message,
    });
  });

  it("error with additional info", function () {
    const code = 422;
    const message = "Unprocessable Entity";
    const info = {
      username: "Username is required",
    };
    const result = responseError(code, message, info);
    expect(result).toEqual({
      code: code,
      message: message,
      info: info,
    });
  });
});
