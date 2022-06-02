import { isFunction } from "./index.js";

describe("isFunction", () => {
  it("return true", () => {
    expect(isFunction(() => undefined)).toBe(true);
  });
  it("return false", () => {
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction("")).toBe(false);
    expect(isFunction(100)).toBe(false);
    expect(isFunction(false)).toBe(false);
    expect(isFunction(new Date())).toBe(false);
  });
});
