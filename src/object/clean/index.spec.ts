import { ObjectClean } from "./index.js";

describe("object clean", () => {
  const objClean = new ObjectClean({});
  const date = new Date();

  it("remove undefined", () => {
    expect(objClean.clean({ prop: undefined })).toStrictEqual({});
  });
  it("remove null", () => {
    expect(objClean.clean({ prop: null })).toStrictEqual({});
  });
  it("remove empty string", () => {
    expect(objClean.clean({ prop: "" })).toStrictEqual({});
  });
  it("remove empty object", () => {
    expect(objClean.clean({ prop: {} })).toStrictEqual({});
  });
  it("remove empty array", () => {
    expect(objClean.clean({ prop: [] })).toStrictEqual({});
  });
  it("remove recursive", () => {
    expect(objClean.clean({ prop: { x: undefined, y: null } })).toStrictEqual({});
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
    expect(objClean.clean(obj)).toStrictEqual(obj);
  });
  it("do not remove recursive when options false", () => {
    expect(new ObjectClean({ recursive: false }).clean({ prop: { x: undefined } })).toStrictEqual({
      prop: { x: undefined },
    });
  });
  it("do not remove undefined when options.undefined = false", () => {
    expect(new ObjectClean({ undefined: false }).clean({ prop: undefined })).toStrictEqual({ prop: undefined });
  });
  it("do not remove null when options.null = false", () => {
    expect(new ObjectClean({ null: false }).clean({ prop: null })).toStrictEqual({ prop: null });
  });
  it("do not remove empty string when options.string = false", () => {
    expect(new ObjectClean({ string: false }).clean({ prop: "" })).toStrictEqual({ prop: "" });
  });
  it("do not remove empty object when options.object = false", () => {
    expect(new ObjectClean({ object: false }).clean({ prop: {} })).toStrictEqual({ prop: {} });
  });
  it("do not remove empty array when options.array = false", () => {
    expect(new ObjectClean({ array: false }).clean({ prop: [] })).toStrictEqual({ prop: [] });
  });
});
