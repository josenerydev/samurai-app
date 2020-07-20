const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../utils/database');
const Horse = require('./horse');
const Quote = require('./quote');
const Battle = require('./battle');
const Clan = require('./clan');

class Samurai extends Model { };

Samurai.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize
});

Samurai.hasOne(Horse, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Horse.belongsTo(Samurai);

Samurai.hasMany(Quote, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: 'CASCADE'
});
Quote.belongsTo(Samurai);

Samurai.belongsToMany(Battle, { through: 'SamuraiBattle' });
Battle.belongsToMany(Samurai, { through: 'SamuraiBattle' });

Clan.hasMany(Samurai);
Samurai.belongsTo(Clan);

module.exports = Samurai;