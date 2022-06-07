import { objOwnProperty } from "./index.js";

describe("object own property", () => {
  it("value", () => {
    expect(objOwnProperty({ x: "x", y: "y" })).toStrictEqual(["x", "y"]);
    expect(objOwnProperty([])).toStrictEqual(["length"]);
    expect(objOwnProperty([{ arg: "a" }, { arg: "b" }])).toStrictEqual(["0", "1", "length"]);
  });

  it("empty", () => {
    expect(objOwnProperty({})).toStrictEqual([]);
    expect(objOwnProperty(null)).toStrictEqual([]);
    expect(objOwnProperty(undefined)).toStrictEqual([]);
    expect(objOwnProperty("")).toStrictEqual([]);
  });
});
