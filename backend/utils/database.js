const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('samurai-app-data', 'postgres', 'admin', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    freezeTableName: true
  }
});

module.exports = sequelize