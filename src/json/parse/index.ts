export const jsonParse = (data: unknown) => {
  if (typeof data === "string") {
    return JSON.parse(data);
  }
  return data;
};
