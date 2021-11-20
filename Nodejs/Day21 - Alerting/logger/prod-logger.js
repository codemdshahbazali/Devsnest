const { createLogger, format, transports } = require('winston');
const { combine, timestamp, errors, json, printf } = format;
require('dotenv').config();

const DiscordTransport = require('winston-discord-transport').default;

const prodLogger = () => {
  /**
   * Creating the custom log format. It's important to put timestamp for debug purpose
   */
  const logFormat = printf(({ timestamp, level, message, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });

  return createLogger({
    //   format: format.simple(),
    format: combine(
      timestamp({ format: 'DD-MMM-YYYY HH:mm:ss' }),
      errors({ stack: true }),
      json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.File({ filename: 'logs/error.log', level: 'error' }),
      new transports.File({ filename: 'logs/combineError.log' }),
      new DiscordTransport({
        webhook:
          'https://discord.com/api/webhooks/911430733007056946/D3r1Dat1geicSxdL20xDGn_-qkVLT1Ofk1n3C0UhW56mQjyF_lQt9Ro6uJQU-xdMcT40',
        defaultMeta: { service: 'my_discord_service' },
        level: 'error',
      }),
    ],
  });
};

module.exports = prodLogger();
