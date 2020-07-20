const { Model, DataTypes } = require('sequelize');

const sequelize = require('../utils/database');
const Samurai = require('./samurai');

class Horse extends Model { };

Horse.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize
});

module.exports = Horse;