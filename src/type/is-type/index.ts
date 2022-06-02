/**
 * Returns true if the type of value is the same as the provided type
 *
 * isType('Hello World', 'string')    => true
 * isType({}, 'object')               => true
 * isType(null, 'object')             => true
 * isType(undefined, 'undefined')     => true
 */
export const isType = (value: unknown, type: string): boolean => typeOf(value) === type;

/**
 * Returns a string representation of the type between 'object', 'array', 'string', 'number', 'boolean', 'function', 'date'
 *
 * typeOf({})                           => 'object'
 * typeOf([])                           => 'array'
 * typeOf('Hello World')                => 'string'
 * typeOf(100)                          => 'number'
 * typeOf(false)                        => 'boolean'
 * typeOf(() => undefined)              => 'function'
 * typeOf(new Date())                   => 'date'
 */
export const typeOf = (value: unknown): string => {
  if (Array.isArray(value)) return "array";
  if (value instanceof Date) return "date";
  return typeof value;
};
