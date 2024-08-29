import { hasDecimal } from "./index.js";

it("has decimal", () => {
  // false
  expect(hasDecimal(1000)).toBe(false);
  expect(hasDecimal(1000.0)).toBe(false);
  expect(hasDecimal(-1000)).toBe(false);
  expect(hasDecimal(-1000.0)).toBe(false);
  // true
  expect(hasDecimal(0.123)).toBe(true);
  expect(hasDecimal(1000.1)).toBe(true);
  expect(hasDecimal(-1000.1)).toBe(true);
});
