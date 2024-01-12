import { objTrim } from "./index.js";

describe("object trim", () => {
  it("should trim object", () => {
    const obj = {
      a: " a ",
      b: "b ",
      c: " c",
      d: { a: " a " },
      e: { a: { a: " a " } },
      f: [" a ", " b", "c "],
    };

    const result = objTrim(obj);

    expect(result).toStrictEqual({
      a: "a",
      b: "b",
      c: "c",
      d: { a: "a" },
      e: { a: { a: "a" } },
      f: ["a", "b", "c"],
    });
  });
});
