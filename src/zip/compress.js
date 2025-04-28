import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

import { createGzip } from "zlib";

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathToFile = __dirname + '/files/fileToCompress.txt';

    const destPath = __dirname + '/files/archive.gz';

    const gzip = createGzip();

    const sourceStream = fs.createReadStream(pathToFile);
    const destStream = fs.createWriteStream(destPath);

    sourceStream.pipe(gzip).pipe(destStream);    
};

await compress();