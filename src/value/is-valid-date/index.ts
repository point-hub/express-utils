export const isValidDate = (value: unknown): boolean => {
  if (value instanceof Date) {
    return !Number.isNaN(value.getTime());
  }

  if (typeof value === "string") {
    return !Number.isNaN(Date.parse(value));
  }

  return false;
};
