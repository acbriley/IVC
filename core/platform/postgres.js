const Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://docker:docker@localhost:5432/docker');;

async function connectAndCheck() {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');

    return sequelize;
};

module.exports = {sequelize, connectAndCheck};

