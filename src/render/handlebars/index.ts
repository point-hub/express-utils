import ExpressHandlebars from "express-handlebars";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderHandlebars = async (path: string, context: Record<string, any>) => {
  const handlebars = ExpressHandlebars.create();
  return await handlebars.render(path, context);
};
