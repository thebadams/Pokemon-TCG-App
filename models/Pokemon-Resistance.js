const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PokemonResistance extends Model {}

PokemonResistance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    resistance_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'resistance',
        key: 'id',
      },
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pokemon',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'pokemonType',
  },
);

module.exports = PokemonResistance;
