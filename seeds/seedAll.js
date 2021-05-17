const sequelize = require('../config/connection');
const seedUser = require('./user-data');
const seedCard = require('./card-data');
const seedDeck = require('./deck-data');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('---------------------DATABASE SYNCED-------------------------');

  await seedUser();
  console.log('----------------------USER SEEDED----------------------------');


  await seedDeck();
  console.log('-----------------------DECK SEEDED----------------------------');

  await seedCard();
  console.log('-----------------------CARD SEEDED-----------------------------');

  

  process.exit(0);
};

seedAll();