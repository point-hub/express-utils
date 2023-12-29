import { jsonParse } from "./index.js";

describe("json parse", () => {
  it("parsing json object to string", () => {
    expect(jsonParse(`{"name":"John"}`)).toStrictEqual({ name: "John" });
  });
  it("it parse nothing if data is an object", () => {
    const data = { name: "John" };
    expect(jsonParse(data)).toStrictEqual(data);
  });
});
