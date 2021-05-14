const Pokemon = require('./Pokemon');
const User = require('./User');
const Weakness = require('./Weakness');
const PokemonWeakness = require('./Pokemon-Weakness');
const Resistance = require('./Resistance');
const PokemonResistance = require('./Pokemon-Resistance');
User.hasMany(Pokemon, {
  foreignKey: 'user_id',
});

Pokemon.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
});

//pokemon belongsToMany types through pokemon types pokemon_id 

//types belongsToMany pokemon through pokemon types type_id

Pokemon.hasMany(Weakness, {
  through: PokemonWeakness,
});

Weakness.belongsToMany(Pokemon, {
  through: PokemonWeakness,
});

Pokemon.hasMany(Resistance, {
  through: PokemonResistance,
});

Resistance.belongsToMany(Pokemon, {
  through: PokemonResistance,
});

module.exports = Pokemon;
