enum LogLevel {
    VERBOSE = 'VERBOSE',
    INFO = 'INFO',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}

interface ILogger {
    setLogLevel(level: LogLevel): void;
    log(level: LogLevel, message: string): void;
    verbose(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
}

class Logger implements ILogger {
    private static instance: Logger;
    private currentLogLevel: LogLevel;

    private constructor() {
        this.currentLogLevel = LogLevel.INFO; // Default log level
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public setLogLevel(level: LogLevel): void {
        this.currentLogLevel = level;
    }

    public log(level: LogLevel, message: string): void {
        if (this.shouldLog(level)) {
            const formattedMessage = this.formatMessage(level, message);
            console.log(formattedMessage);
            this.writeToFile(formattedMessage);
        }
    }

    public verbose(message: string): void {
        this.log(LogLevel.VERBOSE, message);
    }

    public info(message: string): void {
        this.log(LogLevel.INFO, message);
    }

    public warning(message: string): void {
        this.log(LogLevel.WARNING, message);
    }

    public error(message: string): void {
        this.log(LogLevel.ERROR, message);
    }

    private shouldLog(level: LogLevel): boolean {
        const levels = [LogLevel.VERBOSE, LogLevel.INFO, LogLevel.WARNING, LogLevel.ERROR];
        const currentLevelIndex = levels.indexOf(this.currentLogLevel);
        const messageLevelIndex = levels.indexOf(level);

        return messageLevelIndex >= currentLevelIndex;
    }

    private formatMessage(level: LogLevel, message: string): string {
        return `[${new Date().toISOString()}] [${level}] ${message}`;
    }

    private writeToFile(message: string): void {
        // Placeholder for actual file write logic
        NativeFileWriteSync('log.txt', message);
    }
}

// Placeholder function for file writing
function NativeFileWriteSync(filePath: string, buffer: string) {
    console.log(`[File IO ${filePath}] ${buffer}`);
}

export { Logger, LogLevel, ILogger };
