import { isValidDate } from "./index.js";

describe("isValidDate", () => {
  it("return true", () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate("2025-01-01T00:00:00.000Z")).toBe(true);
    expect(isValidDate("2025-01-01")).toBe(true);
  });
  it("return false", () => {
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
    expect(isValidDate({})).toBe(false);
    expect(isValidDate([])).toBe(false);
    expect(isValidDate("")).toBe(false);
    expect(isValidDate(100)).toBe(false);
    expect(isValidDate("Hello World")).toBe(false);
    expect(isValidDate(false)).toBe(false);
    expect(isValidDate(() => undefined)).toBe(false);
  });
});
