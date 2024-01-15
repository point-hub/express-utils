import fs from "fs";
import { copyrightYear } from "./___test___/helpers.js";
import { compile, registerHelper, registerPartial, render } from "./index.js";

describe("render handlebars", () => {
  it("compile handlebars context", async () => {
    const compiledTemplate = compile("<p>Hello {{name}}</p>");
    expect(compiledTemplate({ name: "John" })).toStrictEqual(`<p>Hello John</p>`);
  });
  it("render handlebars context", async () => {
    registerPartial("footer", fs.readFileSync("./src/render/handlebars/___test___/footer.hbs").toString());
    registerHelper("copyrightYear", copyrightYear);
    const response = render(fs.readFileSync("./src/render/handlebars/___test___/index.hbs").toString(), {
      name: "John",
      appName: "Pointhub",
    });
    expect(response).toStrictEqual(`<p>Hello John,</p>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

<tr>
  <td>
    <table
      align="center"
      width="570"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
    >
      <tr>
        <td class="content-cell" align="center">
          <p class="f-fallback sub align-center">
            &copy;2023-2024 - Pointhub. All Rights Reserved.
          </p>
        </td>
      </tr>
    </table>
  </td>
</tr>`);
  });
});
