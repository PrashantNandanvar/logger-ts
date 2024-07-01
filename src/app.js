"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const logger = logger_1.Logger.getInstance();
logger.setLogLevel(logger_1.LogLevel.VERBOSE);
logger.verbose('This is a verbose message');
logger.info('This is an info message');
logger.warning('This is a warning message');
logger.error('This is an error message');
