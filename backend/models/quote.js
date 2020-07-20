const { DataTypes, Model } = require('sequelize');

const sequelize = require('../utils/database');

class Quote extends Model { }

Quote.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize
});

module.exports = Quote;