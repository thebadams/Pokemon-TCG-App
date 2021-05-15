const pokemon = require('pokemontcgsdk');

const dotenv = require('dotenv').config();

pokemon.configure({ apiKey: process.env.TCGSDK_API_KEY });

module.exports = pokemon;
