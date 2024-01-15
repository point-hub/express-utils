import juice from "juice";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderInlineCss = (html, css) => {
    if (!css) {
        return juice(html);
    }
    // eslint-disable-next-line import/no-named-as-default-member
    return juice.inlineContent(html, css);
};
