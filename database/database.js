const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '357943',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;