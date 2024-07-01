import { Logger, LogLevel } from './logger';

const logger = Logger.getInstance();
logger.setLogLevel(LogLevel.VERBOSE);

logger.verbose('This is a verbose message');
logger.info('This is an info message');
logger.warning('This is a warning message');
logger.error('This is an error message');
