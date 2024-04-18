interface IOptions {
  // accounting format means to wrap the number with parentheses instead of appending a minus sign
  accounting?: boolean;
  // The minimum number of fraction digits to use. Possible values are from 0 to 20
  minimumFractionDigits?: number;
  // The maximum number of fraction digits to use. Possible values are from 0 to 20;
  maximumFractionDigits?: number;
}

interface NumberFormatOptions {
  localeMatcher?: string | undefined;
  style?: string | undefined;
  currency?: string | undefined;
  currencySign?: string | undefined;
  useGrouping?: boolean | undefined;
  minimumIntegerDigits?: number | undefined;
  minimumFractionDigits?: number | undefined;
  maximumFractionDigits?: number | undefined;
  minimumSignificantDigits?: number | undefined;
  maximumSignificantDigits?: number | undefined;
}

export const numberFormat = (
  value: number | string,
  options: IOptions = {
    accounting: false,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }
): string => {
  const numberValue = Number(value.toString());
  const nOptions: NumberFormatOptions = {};

  if (options.minimumFractionDigits !== undefined && options.minimumFractionDigits >= 0) {
    nOptions.minimumFractionDigits = options.minimumFractionDigits;
  }

  if (options.maximumFractionDigits !== undefined && options.maximumFractionDigits >= 0) {
    nOptions.maximumFractionDigits = options.maximumFractionDigits;
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  const formattedValue = new Intl.NumberFormat("en", nOptions).format(numberValue);

  // wrap the number with parentheses instead of appending a minus sign
  if (options?.accounting && numberValue < 0) {
    return `(${formattedValue.substring(1)})`;
  }

  return formattedValue;
};
