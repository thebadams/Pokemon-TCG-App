const {
  Deck
} = require('../models');



const deckData = [
  {
    deck_name: "Water Deck",
    user_id: 1
  },
  {
    deck_name: "Fire Deck",
    user_id: 2
  },
  {
    deck_name: "Electric Deck",
    user_id: 3
  },
  {
    deck_name: "Grass Deck",
    user_id: 4
  },
 
];

const seedDeck = () => Deck.bulkCreate(deckData);

module.exports = seedDeck;