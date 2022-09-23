import winston from 'winston';

test('Logging with format', () => { 
    
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        // format: winston.format.simple(),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info("Hello World")
 });

test('Logging with Printf format', () => { 
    
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.printf(info => {
            return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
        }),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info("Hello World")
 });