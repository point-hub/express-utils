import { numberFormat } from "./index.js";

it("number format", () => {
  expect(numberFormat(1000)).toBe("1,000");
  expect(numberFormat(-1000)).toBe("-1,000");

  expect(numberFormat(-1000, { accounting: true })).toBe("(1,000)");

  expect(numberFormat(1000.1234)).toBe("1,000");
  expect(numberFormat(1000.6789)).toBe("1,001");

  expect(numberFormat(1000, { minimumFractionDigits: 2 })).toBe("1,000.00");
  expect(numberFormat(1000.12345, { maximumFractionDigits: 2 })).toBe("1,000.12");
  expect(numberFormat(1000.129, { maximumFractionDigits: 2 })).toBe("1,000.13");
});
