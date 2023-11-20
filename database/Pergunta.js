const { DataTypes } = require('sequelize');
const connection = require("./database")

const Pergunta = connection.define('perguntas', {
    titulo:{
        type: DataTypes.STRING,
        allowNull: false // Não permite que esse campo seja nulo
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull: false
    }
})

// Vai criar a tabela no BD e o force é para impedir de criar caso já exista
Pergunta.sync({force: false}).then(() => {
    console.log("Tabela Pergunta criada")
});

module.exports = Pergunta;

// JEITO ENSINADO NO CURSO
// const Sequelize = require("sequelize");
// const connection = require("./database");

// const Pergunta = connection.define('pergunta', {
//     titulo:{
//         type: Sequelize.STRING,
//         allowNull: false // Não permite que esse campo seja nulo
//     },
//     descricao:{
//         typw: Sequelize.TEXT,
//         allowNull: false
//     }
// });

// // Vai criar a tabela no BD e o force é para impedir de criar caso já exista
// Pergunta.sync({force: false}).then(() => {
//     console.log("Tabela Pergunta criada")
// });