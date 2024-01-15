/* eslint-disable @typescript-eslint/no-explicit-any */
import Handlebars from "handlebars";
export const render = (template, context) => {
    const compiledTemplate = compile(template);
    return compiledTemplate(context);
};
export const compile = (template) => {
    return Handlebars.compile(template);
};
export const registerPartial = async (name, template) => {
    Handlebars.registerPartial(name, template);
};
export const registerHelper = async (name, fn) => {
    Handlebars.registerHelper(name, fn);
};
export default { render, compile, registerPartial, registerHelper };
