const parseArgs = () => {
    let args = process.argv.slice(2);

    const pairs = args.flatMap((_, index, array) => {
        return index % 2 ? [] : [array.slice(index, index + 2)]
    });

    const result = pairs.map((pair) => {
        const [key, value] = pair;
        return `${key.split('--')[1]} is ${value}`;
    })

    console.log(result.join(', '));
};

parseArgs();