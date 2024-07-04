const sequelize = require('sequelize')
const Jogo = require("./Jogo")
const Armazenamento = require("./Armazenamento")


var Jogador = Armazenamento.conexao.define(
    "Jogador",
    {
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: sequelize.STRING,
            allowNull: false
        },
        idade: {
            type: sequelize.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
    { timestamps: false }
)
// Aonde um jogo pode ter varios jogadores e varios jogadores podem jogar um jogo//
Jogo.Jogo.hasMany(Jogador)
Jogador.belongsTo(Jogo.Jogo)

module.exports = {Jogador}