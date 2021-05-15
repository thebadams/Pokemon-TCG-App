const { User } = require('../models');

const userData = [
  {
    username: 'Brian',
    email: 'brian@hotmail.com',
    password: 'password12345',
  },
  {
    username: 'Takuya',
    email: 'Takuya@gmail.com',
    password: 'password12345',
  },
  {
    username: 'Cliff',
    email: 'Cliff@aol.com',
    password: 'password12345',
  },
  {
    username: 'Jasper',
    email: 'Jasper@aol.com',
    password: 'password12345',
  },
  {
    username: 'Ben',
    email: 'Ben@aol.com',
    password: 'password12345',
  },
];

const seedUser = () => User.bulkCreate(userData,{
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
