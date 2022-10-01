const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Skill extends Model{}

Skill.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
        modelName: 'skill',
      }

)

module.exports = Skill;