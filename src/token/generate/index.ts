import { v4 as uuidv4 } from "uuid";

export const tokenGenerate = (): string => {
  return uuidv4();
};
