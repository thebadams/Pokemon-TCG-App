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

//pokemon belongs



module.exports = Pokemon;
