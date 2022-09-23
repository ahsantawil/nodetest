import winston from 'winston';

test('Logging with file transport', () => { 
    const logger = winston.createLogger({
        level: 'info',
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: 'aplication.log'
            }),
        ]
    });

    logger.info("Hello World");
    logger.info("Hello World");
    logger.info("Hello World");
 });