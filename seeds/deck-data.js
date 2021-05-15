const {
  Deck
} = require('../models');



const deckData = [
  {
    deck_name: "Rogue",
    user_id: 1
  },
  {
    deck_name: "Sniper",
    user_id: 2
  },
  {
    deck_name: "Speed",
    user_id: 3
  },
  {
    deck_name: "Power",
    user_id: 4
  },
  {
    deck_name: "Troll",
    user_id: 5
  }
];

const seedDeck = () => Deck.bulkCreate(deckData);

module.exports = seedDeck;