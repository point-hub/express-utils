import fs from "fs";
import path from "path";

interface IPath {
  key: string;
  path: string;
  deep: number;
}

interface IOptions {
  maxDeep?: number;
  regExp?: boolean;
}

export async function fileSearch(name: string, dir: string, options?: IOptions): Promise<IPath[]> {
  const opts: IOptions = {
    maxDeep: 0,
    regExp: false,
  };

  if (options && options.maxDeep) opts.maxDeep = options.maxDeep;
  if (options && options.regExp) opts.regExp = options.regExp;

  return await search(name, dir, opts);
}

async function search(name: string, dir: string, options: IOptions, array: Array<IPath> = [], key = "", deep = 0) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  await Promise.all(
    dirents.map((dirent) => {
      const dirPath = path.join(dir, dirent.name);
      if (dirent.isDirectory() && options.maxDeep && options.maxDeep > deep) {
        return search(name, dirPath, options, array, dirent.name, deep + 1);
      } else if ((options.regExp && dirent.name.match(name)) || dirent.name === name) {
        array.push({
          key: key,
          path: transformPath(dirPath, deep),
          deep: deep,
        });
      }
    })
  );

  return array;
}

function transformPath(dirPath: string, deep: number) {
  const length = dirPath.split("/").length;
  return dirPath
    .split("/")
    .slice(length - deep - 1)
    .join("/");
}
