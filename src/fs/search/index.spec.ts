import { fsSearch } from "./index.js";

describe("file system search", () => {
  it("should not search files recursively", async () => {
    const result = await fsSearch("index.ts", "./src");
    expect(result.find((el) => el.key === "search")).toStrictEqual(undefined);
  });
  it("should return files path", async () => {
    const result = await fsSearch("index.ts", "./src", 2);
    expect(result.find((el) => el.key === "search")).toStrictEqual({
      key: "search",
      path: "src/fs/search/index.ts",
      deep: 2,
    });
  });
});
