const pokemon = require('../config/tcgsdk');

module.exports = {
  searchAPIByName: async (query) =>{
    const results = await pokemon.card.where({ q: `name:${query}`});
    return results;
}
};
