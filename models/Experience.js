const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Experience extends Model{}

Experience.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'experience',
      }

)

module.exports = Experience;