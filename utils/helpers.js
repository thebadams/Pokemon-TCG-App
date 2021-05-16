const pokemon = require('../config/tcgsdk');

// module.exports = {
//   searchAPIByName: async (query) => {
//     const results = await pokemon.card.where({ q: `type:${query}` });
//     return results;
//   },
// };
const searchAPI = async (queryType, query) => {
  const results = await pokemon.card.where({q: `${queryType}:${query}`});
  console.log(results)
}
searchAPI('type', 'water');