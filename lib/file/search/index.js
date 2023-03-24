import fs from "fs";
import path from "path";
export async function fileSearch(name, dir, options) {
    const opts = {
        maxDeep: 0,
        regExp: false,
    };
    if (options && options.maxDeep)
        opts.maxDeep = options.maxDeep;
    if (options && options.regExp)
        opts.regExp = options.regExp;
    return await search(name, dir, opts);
}
async function search(name, dir, options, array = [], key = "", deep = 0) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    await Promise.all(dirents.map((dirent) => {
        const dirPath = path.join(dir, dirent.name);
        if (dirent.isDirectory() && options.maxDeep && options.maxDeep > deep) {
            return search(name, dirPath, options, array, dirent.name, deep + 1);
        }
        else if ((options.regExp && dirent.name.match(name)) || dirent.name === name) {
            array.push({
                key: key,
                path: transformPath(dirPath, deep),
                deep: deep,
            });
        }
    }));
    return array;
}
function transformPath(dirPath, deep) {
    // converts windows backslash paths to Unix paths
    dirPath = dirPath.replace(/\\/g, "/");
    const length = dirPath.split("/").length;
    dirPath = dirPath
        .split("/")
        .slice(length - deep - 1)
        .join("/");
    return dirPath;
}
