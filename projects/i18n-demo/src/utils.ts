import fs from "fs-extra";

export const readFiles = async (dir: string): Promise<string[]> => {
    const files =  fs.readdirSync(dir);
    const result: string[] = [];
    for await (const file of files) {
       if (fs.statSync(file).isFile()) {
           result.push(file);
       }
    }
    return result;
}

