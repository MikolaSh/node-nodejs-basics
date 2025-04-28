import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

import { createGunzip } from "zlib";

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathToFile = __dirname + '/files/archive.gz';

    const destPath = __dirname + '/files/fileToCompress.txt';

    const gunzip = createGunzip();

    const sourceStream = fs.createReadStream(pathToFile);
    const destStream = fs.createWriteStream(destPath);
    
    sourceStream.pipe(gunzip).pipe(destStream);    
};

await decompress();