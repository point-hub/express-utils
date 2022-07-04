import { pascalCase } from "./index.js";

it("pascalCase", () => {
  expect(pascalCase("hello")).toBe("Hello");
  expect(pascalCase("Hello")).toBe("Hello");
  expect(pascalCase("hello world")).toBe("Hello World");
  expect(pascalCase("Hello World")).toBe("Hello World");
});
