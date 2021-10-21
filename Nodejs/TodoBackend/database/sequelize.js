const { Sequelize } = require('sequelize');

/**
 * Establised SQL connection with the database
 */
const sequelize = new Sequelize('devs', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

/**
 * Authenticates the database connection
 */
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
})();

module.exports = sequelize;
