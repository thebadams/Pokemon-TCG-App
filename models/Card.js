const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {}

Card.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    card_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    card_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deck_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'deck',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    api_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'card',
  },
);

module.exports = Card;
