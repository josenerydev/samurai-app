const { DataTypes, Model } = require('sequelize');

const sequelize = require('../utils/database');

class Clan extends Model { }

Clan.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize
});

module.exports = Clan;