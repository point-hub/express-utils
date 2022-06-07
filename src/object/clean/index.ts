import { isNull, isObject, isEmpty } from "@src/index.js";

interface OptionsInterface {
  recursive?: boolean;
  undefined?: boolean;
  null?: boolean;
  string?: boolean;
  object?: boolean;
  array?: boolean;
}

export class ObjectClean {
  private isEmptyParent = false;
  public recursive = true;
  public undefined = true;
  public null = true;
  public string = true;
  public object = true;
  public array = true;

  constructor(options?: OptionsInterface) {
    if (options) this.assignOptions(options);
  }

  public clean(obj: object) {
    const newObj = { ...obj } as never;
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

  private assignOptions(options: OptionsInterface) {
    this.recursive = options.recursive ?? true;
    this.undefined = options.undefined ?? true;
    this.null = options.null ?? true;
    this.string = options.string ?? true;
    this.object = options.object ?? true;
    this.array = options.array ?? true;
  }

  private handle(obj: never) {
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
