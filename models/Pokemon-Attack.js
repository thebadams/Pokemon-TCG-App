const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class PokemonAttack extends Model {}

PokemonAttack.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pokemon_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pokemon',
        key: 'id',
      },
    },
    attack_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'attack',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'pokemonAttack',
  }
);

module.exports = PokemonAbilities;