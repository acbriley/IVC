const Sequelize = require('sequelize');
const db = require('../db/index')

const User = db.define('user',{
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    }
});

module.exports.User = User;