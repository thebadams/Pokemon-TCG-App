const Pokemon = require('./Pokemon');
const User = require('./User');

User.hasMany(Pokemon, {
  foreignKey: 'user_id',
});

Pokemon.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

//pokemon belongsToMany types through pokemon types pokemon_id 

//types belongsToMany pokemon through pokemon types type_id

//pokemon belongsToMany Ability through pokemonAbilities through pokemon_id

//

//Ability belongsToMany Pokemon through pokemonAbilities ability_id

//pokemon belongsToMany Attack through pokemonAttack pokemon_id

//Attack belongsToMAny pokemon through attack_id



module.exports = Pokemon;
