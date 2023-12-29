export const jsonParse = (data: string | object) => {
  if (typeof data === "string") {
    return JSON.parse(data);
  }
  return data;
};
