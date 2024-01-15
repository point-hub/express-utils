import { renderHandlebars } from "./index.js";

describe("render handlebars", () => {
  it("render handlebars context", async () => {
    const response = await renderHandlebars("./src/render/handlebars/___test___/index.hbs", { name: "John" });

    expect(response).toStrictEqual(
      "<p>Hello John,</p>\n\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>"
    );
  });
});
