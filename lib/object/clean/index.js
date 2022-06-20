import { isNull, isObject, isEmpty } from "../../index.js";
export function objClean(obj, options) {
    return new ObjectClean(options).clean(obj);
}
class ObjectClean {
    constructor(options) {
        this.isEmptyParent = false;
        this.recursive = true;
        this.undefined = true;
        this.null = true;
        this.string = true;
        this.object = true;
        this.array = true;
        if (options)
            this.assignOptions(options);
    }
    clean(obj) {
        const newObj = Object.assign({}, obj);
        this.handle(newObj);
        /**
         * To delete parent object that empty we rerun handle function because
         * 'delete' cannot be called on an identifier in strict mode.ts(1102)
         * The operand of a 'delete' operator must be a property reference.ts(2703)
         */
        while (this.isEmptyParent === true) {
            this.isEmptyParent = false;
            this.handle(newObj);
        }
        return newObj;
    }
    assignOptions(options) {
        var _a, _b, _c, _d, _e, _f;
        this.recursive = (_a = options.recursive) !== null && _a !== void 0 ? _a : true;
        this.undefined = (_b = options.undefined) !== null && _b !== void 0 ? _b : true;
        this.null = (_c = options.null) !== null && _c !== void 0 ? _c : true;
        this.string = (_d = options.string) !== null && _d !== void 0 ? _d : true;
        this.object = (_e = options.object) !== null && _e !== void 0 ? _e : true;
        this.array = (_f = options.array) !== null && _f !== void 0 ? _f : true;
    }
    handle(obj) {
        Object.keys(obj).forEach((key) => {
            // recursive object or array
            if (this.recursive === true && !isEmpty(obj[key]) && isObject(obj[key])) {
                return this.handle(obj[key]);
            }
            // if value is undefined
            if (this.undefined === true && obj[key] === undefined) {
                delete obj[key];
            }
            // if value is null
            if (this.null === true && obj[key] === null) {
                delete obj[key];
            }
            // if value is an empty string
            if (this.string === true && obj[key] === "") {
                delete obj[key];
            }
            // if value is an empty array
            if (this.array === true && Array.isArray(obj[key]) && isEmpty(obj[key])) {
                delete obj[key];
            }
            // if value is an empty object
            if (this.object === true && isObject(obj[key]) && !isNull(obj[key]) && isEmpty(obj[key])) {
                delete obj[key];
            }
            // check if parent is an empty object because of deletion
            if (isEmpty(obj)) {
                this.isEmptyParent = true;
            }
        });
    }
}
