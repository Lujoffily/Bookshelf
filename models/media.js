const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Types } = require('./types')
const { User } = require('./User')
const {format} = require('date-fns')
class Media extends Model {

}

Media.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true,
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Types,
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User, 
                key: 'id'
            }
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Failed to pull it"
        },
        picture: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        descript: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        hooks: {
            beforeCreate: (media, options) => {
                media.created_at = format(new Date(), 'MM-dd-yyyy');
            },
                // api calls to googlebooks
                // api call to watchmode
                // beforeCreate: async ()
        },
        sequelize,
        createdAt: 'created_at',
        freezeTableName: true,
        underscored: true,
        modelName: 'media'
    }
);

module.exports = Media