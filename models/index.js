const Pokemon = require('./Pokemon');
const User = require('./User');

User.hasMany(Pokemon, {
  foreignKey: 'user_id',
});

Pokemon.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = Pokemon;
