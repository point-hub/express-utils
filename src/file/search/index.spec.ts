import { fileSearch } from "./index.js";

describe("file system search", () => {
  it("should not search files recursively", async () => {
    const result = await fileSearch("index.ts", "./src");
    expect(result.find((el) => el.key === "search")).toStrictEqual(undefined);
  });
  it("should return files path", async () => {
    const result = await fileSearch("index.ts", "./src", { maxDeep: 2 });
    expect(result.find((el) => el.key === "search")).toStrictEqual({
      key: "search",
      path: "file/search/index.ts",
      deep: 2,
    });
  });
  it("should return files path while search using regexp", async () => {
    const result = await fileSearch("/*spec.ts", "./src", { maxDeep: 2, regExp: true });
    expect(result.find((el) => el.key === "search")).toStrictEqual({
      key: "search",
      path: "file/search/index.spec.ts",
      deep: 2,
    });
  });
});
