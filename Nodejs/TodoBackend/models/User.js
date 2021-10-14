const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    freezeTableName: true,
    // Other model options go here
  }
);

(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = User;
