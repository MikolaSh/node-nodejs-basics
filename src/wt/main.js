import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from 'url';

const performCalculations = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const coresLength = os.cpus().length;
    const initialValue = 10;

    const promises = [];

    for(let i = 0; i < coresLength; i++) {
        promises.push(
            new Promise((resolve, reject) => {
                const worker = new Worker(__dirname + '/worker.js', {
                    workerData: initialValue + i
                })

                worker.on('message', (data) => {
                    resolve({
                        status: 'resolved',
                        data: data
                    })
                });
                worker.on('error', () => {
                    reject({
                        status: 'error',
                        data: null
                    });
                });
            })
        )
    }

    const results = await Promise.allSettled(promises);

    const formattedResults = results.map((result) => {
        if(result.status == 'rejected') {
            return result.reason;
        }

        return result.value; 
    });

    console.log(formattedResults);


};

await performCalculations();