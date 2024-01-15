/* eslint-disable @typescript-eslint/no-explicit-any */
import Handlebars from "handlebars";

export const render = (template: string, context: Record<string, any>) => {
  const compiledTemplate = compile(template);
  return compiledTemplate(context);
};

export const compile = (template: string) => {
  return Handlebars.compile(template);
};

export const registerPartial = async (name: string, template: string) => {
  Handlebars.registerPartial(name, template);
};

export const registerHelper = async (name: string, fn: (params: any) => any) => {
  Handlebars.registerHelper(name, fn);
};

export default { render, compile, registerPartial, registerHelper };
