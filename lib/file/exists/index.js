import fs from "fs";
export function fileExists(path) {
    return fs.existsSync(path);
}
