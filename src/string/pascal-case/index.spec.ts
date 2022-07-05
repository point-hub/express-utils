import { pascalCase } from "./index.js";

it("pascalCase", () => {
  expect(pascalCase("hello")).toBe("Hello");
  expect(pascalCase("Hello")).toBe("Hello");
  expect(pascalCase("hello world")).toBe("HelloWorld");
  expect(pascalCase("Hello World")).toBe("HelloWorld");
  expect(pascalCase("hello-world")).toBe("HelloWorld");
  expect(pascalCase("hello_world")).toBe("HelloWorld");
});
