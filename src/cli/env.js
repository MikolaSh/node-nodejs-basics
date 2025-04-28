const parseEnv = () => {

    const envKeys = Object.keys(process.env).filter((item) => {
        return item.includes('RSS_');
    })

    const result = envKeys.map((envKey) => {
        return `${envKey}=${process.env[envKey]}`;
    })

    console.log(result.join(';   '))
};

parseEnv();