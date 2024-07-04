const express = require('express')
const Armazenamento = require("./Armazenamento")
const Jogador = require("./Jogador")
const Jogo = require("./Jogo")

const app = express()
app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});


const PORTA = 3002
app.listen(PORTA, function () {
    console.log(("Servidor iniciado na porta " + PORTA))
})

Armazenamento.conexao.sync(function () {
    console.log("Inicialização Concluida")
})

app.get("/Jogador/", async function (req, res) {
    const resultado = await Jogador.Jogador.findAll()
    res.send(resultado);
})

app.get("/Jogo/", async function (req, res) {
    const resultado = await Jogo.Jogo.findAll()
    res.send(resultado);
})

app.get("/Jogador/:id", async function (req, res) {
    const JogadorSelecionado = await Jogador.Jogador.findByPk(req.params.id,
        { include: { model: Jogo.Jogo } }
    )
    if (JogadorSelecionado == null) {
        res.status(404).send({})
    } else {
        res.send(JogadorSelecionado);
    }
})

app.get("/Jogo/:id", async function (req, res) {
    const JogoSelecionado = await Jogo.Jogo.findByPk(req.params.id,
        { include: { model: Jogador.Jogador } }
    )
    if (JogoSelecionado == null) {
        res.status(404).send({})
    } else {
        res.send(JogoSelecionado);
    }
})
app.get("/Jogador/idade/:idade", async function (req, res) {
    const resultado = await Jogador.Jogador.findAll({
        where: { idade: req.params.idade },
        include: { model: Jogo.Jogo }

    })
    if (resultado == null) {
        res.status(404).send({})
    } else {
        res.send(resultado)
    }
})
app.get("/Jogo/nome/:nome", async function (req, res) {
    const resultado = await Jogo.Jogo.findAll({
        where: { nome: req.params.nome },
        include: { model: Jogador.Jogador }

    })
    if (resultado == null) {
        res.status(404).send({})
    } else {
        res.send(resultado)
    }
})
app.post("/Jogador/", async function (req, res) {
    const resultado = await Jogador.Jogador.create({
        nome: req.body.nome,
        idade: req.body.idade
    })
    res.send(resultado)
})

app.post("/Jogo/", async function (req, res) {
    const resultado = await Jogo.Jogo.create({
        nome: req.body.Nome,
        JogadorId: req.body.JogadorId
    })
    res.send(resultado)
})

app.put("/Jogador/:id", async function (req, res) {
    console.log(req.params.id);
    const resultado = await Jogador.Jogador.update({
        nome: req.body.nome,
        idade: req.body.idade,
        JogoId: req.body.jogoId
    }, {
        where: { id: req.params.id }
    })
    console.log(resultado);
    if (resultado == 0) {
        res.status(404).send({})
    } else {
        res.send(await Jogador.Jogador.findByPk(req.params.id))
    }
})
app.put("/Jogo/:id", async function (req, res) {
    console.log(req.params.id);
    const resultado = await Jogo.Jogo.update({
        nome: req.body.nome,
        JogadorId: req.body.jogadorId
    }, {
        where: { id: req.params.id }
    })
    console.log(resultado);
    if (resultado == 0) {
        res.status(404).send({})
    } else {
        res.send(await Jogo.Jogo.findByPk(req.params.id))
    }
})
app.delete("/Jogador/:id", async function (req, res) {
    const resultado = await Jogador.Jogador.destroy({
        where: { id: req.params.id }
    })
    if (resultado == null) {
        res.status(404).send({})
    } else {
        res.status(204).send({})
    }
})

app.delete("/Jogo/:id", async function (req, res) {
    const resultado = await Jogo.Jogo.destroy({
        where: { id: req.params.id }
    })
    if (resultado == null) {
        res.status(404).send({})
    } else {
        res.status(204).send({})
    }
})