const pokemon = require('pokemontcgsdk');

const dotenv = require('dotenv').config();

pokemon.configure({ apiKey: process.env.TCGSDK_API_KEY });

// pokemon.card.where({ q: 'name:blastoise' })
// .then(result => {
//     console.log(result.data[0].name) // "Blastoise"
// })


const searchAPI = async (query) =>{
  const results = await pokemon.card.where({ q: `name:${query}`});
  console.log(results);
}

searchAPI('charmander');
module.exports = pokemon;

// var Pokedex = require('pokedex-promise-v2');
// // var options = {
// //   protocol: 'https',
// //   hostName: 'localhost:3001',
// //   versionPath: '/api/v2/',
// //   cacheLimit: 100 * 1000, // 100s
// //   timeout: 5 * 1000 // 5s
// // }
// var P = new Pokedex();

// P.getPokemonByName('eevee') // with Promise
//     .then(function(response) {
//       console.log(response);
//     })
//     .catch(function(error) {
//       console.log('There was an ERROR: ', error);
//     });