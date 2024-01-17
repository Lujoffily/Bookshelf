const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Types extends Model {
    
}

Types.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        medtype: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize, 
        timestamps: false,
        freezeTableNames: true, 
        underscored: true,
        modelName: 'types'
    }
);


module.exports = Types