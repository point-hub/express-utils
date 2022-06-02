import { isNumber } from "./index.js";

describe("isNumber", () => {
  it("return true", () => {
    expect(isNumber(100)).toBe(true);
  });
  it("return false", () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber("")).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(() => undefined)).toBe(false);
    expect(isNumber(new Date())).toBe(false);
  });
});
