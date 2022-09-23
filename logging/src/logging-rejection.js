import winston from 'winston';

async function callAsyc(){
    return Promise.reject("Ups");
}

const logger = winston.createLogger({
    level: 'info',

    transports: [
        new winston.transports.File({
            handleExceptions: true,
            handleRejections: true,
            filename: "./src/exeption.log"
        }),
    ]
});


callAsyc();


