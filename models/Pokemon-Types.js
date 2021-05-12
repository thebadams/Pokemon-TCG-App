const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PokemonType extends Model {}

PokemonType.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        pokemon_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "pokemon",
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: "type",
    },
);

module.exports = PokemonType;