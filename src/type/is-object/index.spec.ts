import { isObject } from "./index.js";

describe("isObject", () => {
  it("return true", () => {
    expect(isObject(null)).toBe(true);
    expect(isObject({})).toBe(true);
  });
  it("return false", () => {
    expect(isObject(undefined)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject("")).toBe(false);
    expect(isObject(100)).toBe(false);
    expect(isObject(false)).toBe(false);
    expect(isObject(() => undefined)).toBe(false);
    expect(isObject(new Date())).toBe(false);
  });
});
