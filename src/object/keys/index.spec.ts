import { objKeys } from "./index.js";

describe("object keys", () => {
  it("value", () => {
    expect(objKeys({ x: "x", y: "y" })).toStrictEqual(["x", "y"]);
    expect(objKeys([{ arg: "a" }, { arg: "b" }])).toStrictEqual(["0", "1"]);
  });

  it("empty", () => {
    expect(objKeys([])).toStrictEqual([]);
    expect(objKeys({})).toStrictEqual([]);
    expect(objKeys(null)).toStrictEqual([]);
    expect(objKeys(undefined)).toStrictEqual([]);
    expect(objKeys("")).toStrictEqual([]);
  });
});
