import { isNull } from "./index.js";

describe("isNull", () => {
  it("return true", () => {
    expect(isNull(null)).toBe(true);
  });

  it("return false", () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull("")).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(() => undefined)).toBe(false);
  });
});
