import { kebabCase } from "./index.js";

it("kebabCase", () => {
  expect(kebabCase("hello")).toBe("hello");
  expect(kebabCase("hello world")).toBe("hello-world");
  expect(kebabCase("HELLO WORLD")).toBe("hello-world");
  expect(kebabCase("Hello-World")).toBe("hello-world");
  expect(kebabCase("Hello_World")).toBe("hello-world");
  expect(kebabCase("HelloWorld")).toBe("hello-world");
});
