import { titleCase } from "./index.js";

it("titleCase", () => {
  expect(titleCase("hello")).toBe("Hello");
  expect(titleCase("hello world")).toBe("Hello World");
  expect(titleCase("hello world for everyone")).toBe("Hello World for Everyone");
});
