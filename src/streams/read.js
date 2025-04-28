import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathToFile = __dirname + '/files/fileToWrite.txt';

    const stream = fs.createReadStream(pathToFile);

    stream.on('data', (data) => {
        process.stdout.write(data + "\n")
    });

};

await read();