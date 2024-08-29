const roundToDecimalPlaces = (num: number, decimalPlaces: number) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
};

export const getDecimal = (value: number, decimalPlaces = 2) => {
  if (typeof value !== "number") return NaN;
  return Math.abs(roundToDecimalPlaces(value % 1, decimalPlaces));
};
