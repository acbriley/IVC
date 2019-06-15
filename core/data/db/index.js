// sets up our database using default setup from sequelize docs online
const Sequelize = require('sequelize');

module.exports = new Sequelize('IVC', 'postgres', 'Jamjam95', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});