import readline from 'readline';

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('What do you think of Nodejs ?  ', (respon) => {
    console.log(`Thanks you for your valuable feedback: ${respon}`);

    readLine.close();
});