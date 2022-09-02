// Kode javascript

function samplePromise(){
    return Promise.resolve("Ahsan");
}

async function run(){
    const data = await samplePromise();
    console.log(data);
}

run();