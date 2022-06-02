import { isDate } from "./index.js";

describe("isDate", () => {
  it("return true", () => {
    expect(isDate(new Date())).toBe(true);
  });
  it("return false", () => {
    expect(isDate("2022-01-01")).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate("")).toBe(false);
    expect(isDate(100)).toBe(false);
    expect(isDate(false)).toBe(false);
    expect(isDate(() => undefined)).toBe(false);
  });
});
