const { Sequelize } = require('sequelize');

const {
  sequelize_database,
  sequelize_username,
  sequelize_password,
  sequelize_host,
  sequelize_dialect,
} = require('./../config');

const sequelize = new Sequelize(
  sequelize_database,
  sequelize_username,
  sequelize_password,
  {
    host: sequelize_host,
    dialect: sequelize_dialect,
  }
);

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
