import { fsExists } from "./index.js";

describe("file system is exists", () => {
  it("return true if file exists", () => {
    const result = fsExists("./src/fs/exists/index.ts");
    expect(result).toBeTruthy();
  });
  it("return false if file not exists", () => {
    const result = fsExists("./src/fs/exists/index2.ts");
    expect(result).toBeFalsy();
  });
  it("return true if directory exists", () => {
    const result = fsExists("./src/fs/exists");
    expect(result).toBeTruthy();
  });
  it("return false if directory not exists", () => {
    const result = fsExists("./src/fs/exists2");
    expect(result).toBeFalsy();
  });
});
