export const hasDecimal = (value: number) => {
  return typeof value === "number" && value % 1 !== 0;
};
