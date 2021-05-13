const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PokemonWeakness extends Model {}

PokemonWeakness.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    weaknessId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'weakness',
        key: 'id',
      },
    },
    pokemonId: {
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

module.exports = PokemonWeakness;
