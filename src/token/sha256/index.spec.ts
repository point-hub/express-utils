import { tokenSha256 } from "./index.js";

it("tokenSha256", () => {
  expect(typeof tokenSha256("text")).toBe("string");
  expect(typeof tokenSha256("text")).not.toBe("text");
});
