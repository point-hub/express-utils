import { trim, trimStart, trimEnd, trimAll } from "./index.js";

describe("string strim", () => {
  it("trim", () => {
    expect(trim("   Lorem   ipsum   ")).toBe("Lorem ipsum");
  });
  it("trim start", () => {
    expect(trimStart("   Lorem   ipsum   ")).toBe("Lorem   ipsum   ");
  });
  it("trim end", () => {
    expect(trimEnd("   Lorem   ipsum   ")).toBe("   Lorem   ipsum");
  });
  it("trim all", () => {
    expect(trimAll("   Lorem   ipsum   ")).toBe(" Lorem ipsum ");
  });
});
