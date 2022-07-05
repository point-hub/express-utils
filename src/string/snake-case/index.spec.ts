import { snakeCase } from "./index.js";

it("snakeCase", () => {
  expect(snakeCase("hello")).toBe("hello");
  expect(snakeCase("hello world")).toBe("hello_world");
  expect(snakeCase("HELLO WORLD")).toBe("hello_world");
  expect(snakeCase("Hello-World")).toBe("hello_world");
  expect(snakeCase("Hello_World")).toBe("hello_world");
  expect(snakeCase("HelloWorld")).toBe("hello_world");
});
