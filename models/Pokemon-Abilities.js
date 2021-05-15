const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PokemonAbilities extends Model {}

PokemonAbilities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "pokemon",
        key: "id",
      },
    },
    ability_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "ability",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: "pokemonAbilities",
  }
);

module.exports = PokemonAbilities;
