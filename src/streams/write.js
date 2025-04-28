import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathToFile = __dirname + '/files/fileToWrite.txt';

    const stream = fs.createWriteStream(pathToFile);

    process.stdin.on('data', (data) => {
        stream.write(data);
    })
};

await write();