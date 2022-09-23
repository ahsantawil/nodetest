import winston from 'winston';

test('Logging with file transport level', () => { 
    const logger = winston.createLogger({
        level: 'info',
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: 'application.log'
            }),
            new winston.transports.File({
                level: 'error',
                filename: 'application-error.log'
            }),
        ]
    });

    logger.info('Hello Ahsan');
    logger.info('Hello Ahsan');
    logger.info('Hello Ahsan');
    logger.error('Tidak dapat terhubung dengan server');
    logger.error('Tidak dapat terhubung dengan server');
    logger.error('Tidak dapat terhubung dengan server');
 });