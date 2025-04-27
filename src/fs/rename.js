import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const errorMsg = 'FS operation failed';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const wrongFileName = '/files/wrongFilename.txt';
    const properFileName = '/files/properFilename.md';

    const pathToWrongFileName = __dirname + wrongFileName;
    const pathToProperFileName = __dirname + properFileName;

    fs.readFile(pathToProperFileName, (err) => {
        if(!err) {
            throw new Error(errorMsg);
        }
    })

    fs.rename(pathToWrongFileName, pathToProperFileName, (err) => {
        if(err) {
            throw new Error(erroorMsg);
        }
    })

};

await rename();