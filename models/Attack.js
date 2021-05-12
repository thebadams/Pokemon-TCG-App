const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Attack extends Model {}

Attack.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    attack_name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    attack_text: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    attack_damage: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    attack_cost: {
      type:DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'attack',
  }
);


module.exports = Attack;