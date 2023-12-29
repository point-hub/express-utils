export const jsonStringify = (data: object | string) => {
  if (typeof data === "object") {
    return JSON.stringify(data);
  }
  return data;
};
