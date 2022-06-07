import { typeOf, isType } from "./index.js";

describe("isType", () => {
  it("object", () => {
    expect(isType(null, "object")).toBe(true);
    expect(isType({}, "object")).toBe(true);
  });
  it("string", () => {
    expect(isType("", "string")).toBe(true);
  });
  it("array", () => {
    expect(isType([], "array")).toBe(true);
  });
});

describe("typeOf", () => {
  it("object", () => {
    expect(typeOf({})).toBe("object");
  });

  it("array", () => {
    expect(typeOf([])).toBe("array");
  });

  it("date", () => {
    expect(typeOf(new Date())).toBe("date");
  });

  it("string", () => {
    expect(typeOf("")).toBe("string");
    expect(typeOf("  ")).toBe("string");
    expect(typeOf("Hello World")).toBe("string");
  });

  it("number", () => {
    expect(typeOf(100)).toBe("number");
  });

  it("boolean", () => {
    expect(typeOf(true)).toBe("boolean");
    expect(typeOf(false)).toBe("boolean");
  });

  it("function", () => {
    expect(typeOf(() => undefined)).toBe("function");
  });

  it("other", () => {
    expect(typeOf(undefined)).toBe("undefined");
    expect(typeOf(null)).toBe("object");
  });
});
