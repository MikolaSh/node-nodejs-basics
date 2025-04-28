import crypto from "crypto";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const stream = fs.createReadStream(__dirname + '/files/fileToCalculateHashFor.txt');

    const hash = crypto.createHash('sha256');

    hash.setEncoding('hex');
    
    
    stream.pipe(hash);

    stream.on('end', () => {
        hash.end();
        console.log(hash.read());
    });

};

await calculateHash();