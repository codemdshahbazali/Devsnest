const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('devs', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
})();

module.exports = sequelize;
