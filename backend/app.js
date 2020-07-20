const sequelize = require('./utils/database');
const Samurai = require('./models/samurai');
const Horse = require('./models/horse');
const Clan = require('./models/clan');

// Samurai.hasOne(Horse);
// Horse.belongsTo(Samurai);

sequelize.sync({ force: true }).then(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}).then(async () => {
  // const samurai = await Samurai.create({ name: 'Nery' });
  // const uchiha = await Clan.create({ name: 'Uchiha' });
  // await samurai.setClan(uchiha);

}).catch(err => console.error(err));