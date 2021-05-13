const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resistance extends Model {}

Resistance.init(
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
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'resistance',
    underscored: true,
  },
);

module.exports = Resistance;
