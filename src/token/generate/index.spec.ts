import { tokenGenerate } from "./index.js";

it("tokenGenerate", () => {
  expect(typeof tokenGenerate()).toBe("string");
});
