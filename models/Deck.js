const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Deck extends Model {}

Deck.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    deck_name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'deck'
  }
);

module.exports = Deck;