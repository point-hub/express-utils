import fs from "fs";
import path from "path";
export async function fileSearch(name, dir, maxDeep = 0) {
    return await search(name, dir, maxDeep);
}
async function search(name, dir, maxDeep, array = [], key = "", deep = 0) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    await Promise.all(dirents.map((dirent) => {
        const dirPath = path.join(dir, dirent.name);
        if (dirent.isDirectory() && maxDeep > deep) {
            return search(name, dirPath, maxDeep, array, dirent.name, deep + 1);
        }
        else if (dirent.name === name) {
            array.push({
                key: key,
                path: dirPath,
                deep: deep,
            });
        }
    }));
    return array;
}
