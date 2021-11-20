// console.log('Hello');
// console.warn('warn');
// console.error('error');
// console.debug('debug');
// console.error(new Error('Something went wrong'));

const logger = require('./logger');

logger.error('error');
logger.error(new Error('errorsss'));
logger.warn('warn', { meta: 'Error Info' });
logger.info('info', {
  user: 'req.user',
  loggedInUser: 'shahbaz',
  req: 'req',
  error: 'error',
});
logger.http('http');
logger.verbose('verbose');
logger.debug('debug');
logger.silly('silly');
