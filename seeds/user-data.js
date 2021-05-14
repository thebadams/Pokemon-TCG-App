const { User } = require('../models');


const userData = [
  {
    name: "Brian",
    email: "brian@hotmail.com",
    password: "password12345"
  },
  {
    name: "Takuya",
    email: "Takuya@gmail.com",
   password: "password12345"
  },
  {
    "name": "Cliff",
    email: "Cliff@aol.com",
   password: "password12345"
  },
  {
    "name": "Jasper",
    email: "Jasper@aol.com",
   password: "password12345"
  },
  {
    "name": "Ben",
    email: "Ben@aol.com",
   password: "password12345"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;