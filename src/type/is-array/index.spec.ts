import { isArray } from "./index.js";

describe("isArray", () => {
  it("return true", () => {
    expect(isArray([])).toBe(true);
  });
  it("return false", () => {
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray("")).toBe(false);
    expect(isArray(100)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(() => undefined)).toBe(false);
    expect(isArray(new Date())).toBe(false);
  });
});
