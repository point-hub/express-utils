import { isNil } from "./index.js";

describe("isNil", () => {
  it("return true", () => {
    expect(isNil(undefined)).toBe(true);
    expect(isNil(null)).toBe(true);
  });

  it("return false", () => {
    expect(isNil("")).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil({})).toBe(false);
    expect(isNil(1)).toBe(false);
    expect(isNil(() => undefined)).toBe(false);
  });
});
