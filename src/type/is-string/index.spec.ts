/* eslint-disable no-undef */
import { isString } from "./index.js";

describe("isString", () => {
  it("return true", () => {
    expect(isString("")).toBe(true);
  });
  it("return false", () => {
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(100)).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString(() => undefined)).toBe(false);
    expect(isString(new Date())).toBe(false);
  });
});
