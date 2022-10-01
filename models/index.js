// create relationships between Resume and User
const User = require("./User");
const Resume = require('./Resume');

User.hasOne(Resume, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

Resume.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Resume };