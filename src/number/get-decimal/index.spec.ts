import { getDecimal } from "./index.js";

it("get decimal", () => {
  expect(getDecimal(1000)).toBe(0);
  expect(getDecimal(1000.0)).toBe(0);
  expect(getDecimal(-1000)).toBe(0);
  expect(getDecimal(-1000.0)).toBe(0);
  expect(getDecimal(0.123)).toBe(0.12);
  expect(getDecimal(0.123, 4)).toBe(0.123);
  expect(getDecimal(1000.1)).toBe(0.1);
  expect(getDecimal(-1000.1)).toBe(0.1);
});
