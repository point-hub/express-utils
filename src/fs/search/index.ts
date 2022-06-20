import fs from "fs";
import path from "path";

interface IPath {
  key: string;
  path: string;
  deep: number;
}

export async function fsSearch(name: string, dir: string, maxDeep = 0): Promise<IPath[]> {
  return await search(name, dir, maxDeep);
}

async function search(name: string, dir: string, maxDeep: number, array: Array<IPath> = [], key = "", deep = 0) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  await Promise.all(
    dirents.map((dirent) => {
      const dirPath = path.join(dir, dirent.name);
      if (dirent.isDirectory() && maxDeep > deep) {
        return search(name, dirPath, maxDeep, array, dirent.name, deep + 1);
      } else if (dirent.name === name) {
        array.push({
          key: key,
          path: dirPath,
          deep: deep,
        });
      }
    })
  );

  return array;
}
