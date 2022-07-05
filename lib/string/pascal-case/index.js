import { camelCase } from "../camel-case/index.js";
import { capitalize } from "../capitalize/index.js";
export const pascalCase = (value) => capitalize(camelCase(value));
