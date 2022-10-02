// create relationships between all models
const User = require("./User");
const Resume = require('./Resume');
const Experience = require('./Experience');
const Education = require('./Education');
const Reference = require('./Reference');
const Skill = require('./Skill');

User.hasOne(Resume, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

Resume.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Resume };