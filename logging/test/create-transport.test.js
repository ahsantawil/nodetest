import winston, { transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import TransportStream from 'winston-transport';

test('Create new transport', () => { 
    
    class MyTransport extends TransportStream{
        constructor(option) {
            super(option);
        }

        log(info, next) {
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`);
            next();
        }
    }

    const logger = winston.createLogger({
        level: 'silly',
        transports: [
            new MyTransport({})
        ]
    });

    logger.error('Message Error');
    logger.warn('Message Warn');
    logger.info('Message Info');
    logger.http('Message Http');
    logger.verbose('Message Verbose');
    logger.debug('Message Debug');
    logger.silly('Message Silly');
 });
