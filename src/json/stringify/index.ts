export const jsonStringify = (data: unknown) => {
  if (typeof data === "object") {
    return JSON.stringify(data);
  }
  return data;
};
