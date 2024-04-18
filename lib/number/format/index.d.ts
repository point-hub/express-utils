interface IOptions {
    accounting?: boolean;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
}
export declare const numberFormat: (value: number | string, options?: IOptions) => string;
export {};
