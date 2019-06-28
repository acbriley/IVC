const Sequelize = require('sequelize');

function connectAndCheck() {
    const sequelize = new Sequelize('postgres://docker:docker@localhost:5432/docker');
    sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    return sequelize;
};

module.exports = connectAndCheck;

