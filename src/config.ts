import { cosmiconfig } from "cosmiconfig";

export async function readConfig(moduleName: string, path: string | undefined) {
  const config = cosmiconfig(moduleName, {
    searchPlaces: [
      `.${moduleName}rc`,
      `.${moduleName}rc.json`,
      `.${moduleName}rc.yaml`,
      `.${moduleName}rc.yml`,
      `.${moduleName}rc.js`,
      `${moduleName}.config.yaml`,
      `${moduleName}.config.yml`,
      `${moduleName}.config.js`,
    ],
  });

  let result;
  if (path != null) {
    result = await config.load(path);
  } else {
    result = await config.search();
  }

  return result?.config;
}
