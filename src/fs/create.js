import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const errorMsg = 'FS operation failed';
    const content = 'I am fresh and young';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    fs.readFile(__dirname + '/files/fresh.txt', (err) => {
        if(!err) {
            throw new Error(errorMsg)
        }
    })
    

    fs.writeFile(__dirname + '/files/fresh.txt', content, () => {});
    
};

await create();