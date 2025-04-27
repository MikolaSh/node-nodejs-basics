import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const errorMsg = 'FS operation failed';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToRemove = __dirname + '/files/fileToRemove.txt';

    fs.rm(fileToRemove, (err) => {
        if(err) {
            throw new Error(errorMsg);
        }
    })
};

await remove();