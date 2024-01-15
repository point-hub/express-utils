import { renderInlineCss } from "./index.js";

describe("render inline css", () => {
  it("render internal style", () => {
    const html = "<style>div{color:black}</style><div>Hello World</div>";
    const response = renderInlineCss(html);

    expect(response).toStrictEqual('<div style="color: black;">Hello World</div>');
  });
  it("render external style", () => {
    const html = "<div>Hello World</div>";
    const css = "div { color: black; }";
    const response = renderInlineCss(html, css);

    expect(response).toStrictEqual('<div style="color: black;">Hello World</div>');
  });
});
