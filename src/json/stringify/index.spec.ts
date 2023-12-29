import { jsonStringify } from "./index.js";

describe("json stringify", () => {
  it("parsing json object to string", () => {
    expect(jsonStringify({ name: "John" })).toStrictEqual(`{"name":"John"}`);
  });
  it("stringify nothing if data is a string", () => {
    const data = "John";
    expect(jsonStringify(data)).toStrictEqual(data);
  });
});
