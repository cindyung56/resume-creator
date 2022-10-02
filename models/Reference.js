const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reference extends Model{}

Reference.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isNumeric: true,
                len: [7, 10],
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
        modelName: 'reference',
      }

)

module.exports = Reference;