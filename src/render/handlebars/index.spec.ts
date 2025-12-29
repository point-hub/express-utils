import { compile } from "./index.js";

describe("render handlebars", () => {
  it("compile handlebars context", async () => {
    const compiledTemplate = compile("<p>Hello {{name}}</p>");
    expect(compiledTemplate({ name: "John" })).toStrictEqual(`<p>Hello John</p>`);
  });
});
