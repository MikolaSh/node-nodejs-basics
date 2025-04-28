import { spawn } from "child_process";
import path from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const cp = spawn('node', [__dirname + '/files/script.js', ...args])
      
    cp.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    process.stdin.on('data', (input) => {
        cp.stdin.write(input);
    });

    process.stdin.on('end', () => {
        cp.stdin.end();
    });

    cp.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', 2, 'test', [1, 3, 4]]);
