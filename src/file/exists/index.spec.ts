import { fileExists } from "./index.js";

describe("file system is exists", () => {
  it("return true if file exists", () => {
    const result = fileExists("./src/file/exists/index.ts");
    expect(result).toBeTruthy();
  });
  it("return false if file not exists", () => {
    const result = fileExists("./src/file/exists/index2.ts");
    expect(result).toBeFalsy();
  });
  it("return true if directory exists", () => {
    const result = fileExists("./src/file/exists");
    expect(result).toBeTruthy();
  });
  it("return false if directory not exists", () => {
    const result = fileExists("./src/file/exists2");
    expect(result).toBeFalsy();
  });
});
