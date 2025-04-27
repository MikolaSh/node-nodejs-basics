import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const src = '/files';
    const dest = '/files_copy';

    const srcPath = __dirname + src;
    const destPath = __dirname + dest;
    const errorMsg = 'FS operation failed';


    fs.readdir(srcPath, (err) => {
        if(err) {
            throw new Error(errorMsg)
        }
    })

    fs.readdir(destPath, (err) => {
        if(!err) {
            throw new Error(errorMsg)
        }
    })

    fs.cp(srcPath, destPath, {recursive: true}, () => {}); 
};

await copy();
