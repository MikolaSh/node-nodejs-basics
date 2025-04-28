import { Transform } from "stream"; 

const transform = async () => {

    const revers = new Transform({
        transform(chunk, _, callback) {
            const reversedString = chunk.toString().split("").reverse().join("")
            this.push(reversedString);
            callback();
        }
    })

    process.stdin.pipe(revers).pipe(process.stdout);
};

await transform();