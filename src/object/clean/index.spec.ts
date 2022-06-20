import { objClean } from "./index.js";

describe("object clean", () => {
  const date = new Date();

  it("remove undefined", () => {
    expect(objClean({ prop: undefined })).toStrictEqual({});
  });
  it("remove null", () => {
    expect(objClean({ prop: null })).toStrictEqual({});
  });
  it("remove empty string", () => {
    expect(objClean({ prop: "" })).toStrictEqual({});
  });
  it("remove empty object", () => {
    expect(objClean({ prop: {} })).toStrictEqual({});
  });
  it("remove empty array", () => {
    expect(objClean({ prop: [] })).toStrictEqual({});
  });
  it("remove recursive", () => {
    expect(objClean({ prop: { x: undefined, y: null } })).toStrictEqual({});
  });
  it("do not remove property that have value", () => {
    const obj = {
      propDate: date,
      propString: "string",
      propNumber: 0,
      propBoolean: true,
      propObj: { x: "y" },
      propArrayOfObject: [{ x: "y" }, { x: "y" }],
      propArrayOfString: ["a", "b", "c"],
      propFunction: () => undefined,
    };
    expect(objClean(obj)).toStrictEqual(obj);
  });
  it("do not remove recursive when options false", () => {
    expect(objClean({ prop: { x: undefined } }, { recursive: false })).toStrictEqual({
      prop: { x: undefined },
    });
  });
  it("do not remove undefined when options.undefined = false", () => {
    expect(objClean({ prop: undefined }, { undefined: false })).toStrictEqual({ prop: undefined });
  });
  it("do not remove null when options.null = false", () => {
    expect(objClean({ prop: null }, { null: false })).toStrictEqual({ prop: null });
  });
  it("do not remove empty string when options.string = false", () => {
    expect(objClean({ prop: "" }, { string: false })).toStrictEqual({ prop: "" });
  });
  it("do not remove empty object when options.object = false", () => {
    expect(objClean({ prop: {} }, { object: false })).toStrictEqual({ prop: {} });
  });
  it("do not remove empty array when options.array = false", () => {
    expect(objClean({ prop: [] }, { array: false })).toStrictEqual({ prop: [] });
  });
});
