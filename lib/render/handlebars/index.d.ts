export declare const render: (template: string, context: Record<string, any>) => string;
export declare const compile: (template: string) => HandlebarsTemplateDelegate<any>;
export declare const registerPartial: (name: string, template: string) => Promise<void>;
export declare const registerHelper: (name: string, fn: (params: any) => any) => Promise<void>;
/**
 * Generate text containing released year and
 * current year like 2016-2021 or just 2021
 * if released year equals current year.
 */
export declare const copyrightYear: (releaseYear: number) => string | number;
declare const _default: {
    render: (template: string, context: Record<string, any>) => string;
    compile: (template: string) => HandlebarsTemplateDelegate<any>;
    registerPartial: (name: string, template: string) => Promise<void>;
    registerHelper: (name: string, fn: (params: any) => any) => Promise<void>;
};
export default _default;
