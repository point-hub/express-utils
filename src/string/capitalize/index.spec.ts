import { capitalize } from "./index.js";

it("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("hello world")).toBe("Hello world");
});
