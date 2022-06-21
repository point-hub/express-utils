import fs from "fs";

export function fileExists(path: string) {
  return fs.existsSync(path);
}
