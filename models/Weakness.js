const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weakness extends Model {}

Weakness.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'weakness',
    underscored: true,
  },
);

module.exports = Weakness;
