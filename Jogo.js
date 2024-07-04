const sequelize = require('sequelize')
const Jogador = require("./Jogador")
const Armazenamento = require("./Armazenamento")


var Jogo = Armazenamento.conexao.define(
    "Jogo",
    {
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: sequelize.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
)

module.exports = { Jogo }