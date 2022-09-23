import winston from 'winston';

test('Logging with shortcut level function', () => { 
    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.error('Error Message');
    logger.warn('Warn Message');
    logger.info('Info Message');
    logger.http('Http Message');
    logger.verbose('Verbose Message');
    logger.debug('Debug Message');
    logger.silly('Silly Message');
 });