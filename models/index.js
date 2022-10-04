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
});

Resume.belongsTo(User, {
    foreignKey: 'user_id',
});

// ----------------------------------

Resume.hasMany(Experience, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Experience.belongsTo(Resume, {
    foreignKey: 'user_id',
});

// ----------------------------------

Resume.hasMany(Education, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Education.belongsTo(Resume, {
    foreignKey: 'user_id',
});

// ----------------------------------

Resume.hasMany(Reference, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Reference.belongsTo(Resume, {
    foreignKey: 'user_id',
});

// ----------------------------------

Resume.hasMany(Skill, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Skill.belongsTo(Resume, {
    foreignKey: 'user_id',
});


module.exports = { User, Resume, Experience, Education, Reference, Skill };