let logger = null;
require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  logger = require('./dev-logger');
} else {
  logger = require('./prod-logger');
}

module.exports = logger;
