import { removeSpaces } from "./index.js";

it("removeSpaces", () => {
  expect(removeSpaces("Hello World")).toBe("HelloWorld");
});
