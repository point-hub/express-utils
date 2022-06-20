import fs from "fs";

export function fsExists(path: string) {
  return fs.existsSync(path);
}
