import fs from "../../fs";
export function fsExists(path) {
    return fs.existsSync(path);
}
