const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('devs', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection establised with DB');
  } catch (e) {
    console.error('Unable to connect with the DB');
  }
})();

module.exports = sequelize;
