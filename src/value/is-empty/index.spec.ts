import { isEmpty } from "./index.js";

describe("isEmpty", () => {
  it("return true", () => {
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty("")).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
  });

  it("return false", () => {
    expect(isEmpty("  ")).toBe(false);
    expect(isEmpty({ arg: "value" })).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(() => undefined)).toBe(false);
    expect(isEmpty(new Date())).toBe(false);
  });
});
