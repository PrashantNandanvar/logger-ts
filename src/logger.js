"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = exports.Logger = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel["VERBOSE"] = "VERBOSE";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class Logger {
    constructor() {
        this.currentLogLevel = LogLevel.INFO; // Default log level
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    setLogLevel(level) {
        this.currentLogLevel = level;
    }
    log(level, message) {
        if (this.shouldLog(level)) {
            const formattedMessage = this.formatMessage(level, message);
            console.log(formattedMessage);
            this.writeToFile(formattedMessage);
        }
    }
    verbose(message) {
        this.log(LogLevel.VERBOSE, message);
    }
    info(message) {
        this.log(LogLevel.INFO, message);
    }
    warning(message) {
        this.log(LogLevel.WARNING, message);
    }
    error(message) {
        this.log(LogLevel.ERROR, message);
    }
    shouldLog(level) {
        const levels = [LogLevel.VERBOSE, LogLevel.INFO, LogLevel.WARNING, LogLevel.ERROR];
        const currentLevelIndex = levels.indexOf(this.currentLogLevel);
        const messageLevelIndex = levels.indexOf(level);
        return messageLevelIndex >= currentLevelIndex;
    }
    formatMessage(level, message) {
        return `[${new Date().toISOString()}] [${level}] ${message}`;
    }
    writeToFile(message) {
        // Placeholder for actual file write logic
        NativeFileWriteSync('log.txt', message);
    }
}
exports.Logger = Logger;
// Placeholder function for file writing
function NativeFileWriteSync(filePath, buffer) {
    console.log(`[File IO ${filePath}] ${buffer}`);
}
