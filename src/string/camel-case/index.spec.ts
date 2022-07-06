import { camelCase } from "./index.js";

it("camelCase", () => {
  expect(camelCase("hello")).toBe("hello");
  expect(camelCase("Hello")).toBe("hello");
  expect(camelCase("hello world")).toBe("helloWorld");
  expect(camelCase("Hello World")).toBe("helloWorld");
  expect(camelCase("Hello$World")).toBe("helloWorld");
  expect(camelCase("Hello-World")).toBe("helloWorld");
  expect(camelCase("Hello_World")).toBe("helloWorld");
  expect(camelCase("helloWorld")).toBe("helloWorld");
});
