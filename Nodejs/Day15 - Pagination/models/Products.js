const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Products = sequelize.define(
  'Products',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
  }
);

(async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (e) {
    console.log(e.message);
  }
})();

module.exports = Products;
