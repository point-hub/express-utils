import fs from "fs";
import { fsCopy } from "./index.js";

describe("file system copy", () => {
  const dest = "./dest";
  afterEach(() => {
    fs.rmSync(dest, { recursive: true, force: true });
  });
  it("should copy file", () => {
    fs.mkdirSync(dest);
    fsCopy("./src/fs/copy/index.ts", `${dest}/index.ts`);
    const result = fs.readdirSync(dest);
    expect(result).toEqual(["index.ts"]);
  });
  it("should copy dir", () => {
    fs.mkdirSync(dest);
    fsCopy("./src/fs/copy", `${dest}`);
    const result = fs.readdirSync(dest);
    expect(result).toEqual(["index.spec.ts", "index.ts"]);
    fs.rmSync(dest, { recursive: true, force: true });
  });
});
