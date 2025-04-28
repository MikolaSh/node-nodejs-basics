import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const errorMsg = 'FS operation failed';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const dirPath = __dirname + '/files/fileToRead.txt';

    fs.readFile(dirPath, "utf8", (err, data) => {
        if(err) {
            throw new Error(errorMsg);
        }

        console.log(data)
    })
};

await read();