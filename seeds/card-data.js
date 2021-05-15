const { Card } = require('../models');

const cardData = [
  {
    card_name: "Charmander",
    description: "A mobile app that will send you notifications whenever a concert is playing in your area.",
    card_image: "charmander.png"
  },
  {
    card_name: "Bulbasaur",
    description: "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!",
    card_image: "bulbasaur.png"
  },
  {
    card_name: "Squirtle",
    description: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    card_image: "squirtle.png"
  },
  {
    card_name: "Pikachu",
    description: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    card_image: "pikachu.png"
  },
  {
    card_name: "Eevee",
    description: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    card_image: "eevee.png"
  },
  {
    card_name: "Snorlax",
    description: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    card_image: "snorlax.png"
  },
  {
    card_name: "Mr. Mime",
    description: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    card_image: "mrmime.png"
  },
  {
    card_name: "Pidgey",
    description: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    card_image: "pidgey.png"
  },
  {
    card_name: "Mewtwo",
    description: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    card_image: "mewtwo.png"
  },
  {
    card_name: "Mew",
    description: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    card_image: "mew.png"
  }
];

const seedCard = () => Card.bulkCreate(cardData);

module.exports = seedCard;
