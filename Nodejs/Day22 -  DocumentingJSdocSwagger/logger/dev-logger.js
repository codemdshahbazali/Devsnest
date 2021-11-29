const { createLogger, format, transports } = require('winston');
const { printf, combine, timestamp, colorize, errors } = format;
require('dotenv').config();

const devLogger = () => {
  /**
   * Creating the custom log format. It's important to put timestamp for debug purpose
   */
  const logFormat = printf(({ timestamp, level, message, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });

  return createLogger({
    level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
    //   format: format.simple(),
    format: combine(
      colorize(),
      timestamp({ format: 'DD-MMM-YYYY HH:mm:ss' }),
      errors({ stack: true }),
      logFormat
    ),
    transports: [new transports.Console()],
  });
};

module.exports = devLogger();
