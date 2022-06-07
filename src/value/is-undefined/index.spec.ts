import { isUndefined } from "./index.js";

describe("isUndefined", () => {
  it("return true", () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it("return false", () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined("")).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(() => undefined)).toBe(false);
  });
});
