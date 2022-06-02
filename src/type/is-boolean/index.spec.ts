import { isBoolean } from "./index.js";

describe("isBoolean", () => {
  it("return true", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });
  it("return false", () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean("")).toBe(false);
    expect(isBoolean(100)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(() => undefined)).toBe(false);
    expect(isBoolean(new Date())).toBe(false);
  });
});
