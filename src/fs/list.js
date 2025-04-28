import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const errorMsg = 'FS operation failed';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const dirPath = __dirname + '/files';

    fs.readdir(dirPath, (err, files) => {
        if(err) {
            throw new Error(errorMsg);
        }

        console.log(files);
    });

};

await list();