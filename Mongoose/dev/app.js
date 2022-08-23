//importar o express para montar o server com node
const express = require('express')
const app = express()
const port = 3000

const linkRouter = require('./routes/linkRoute')

//importar o mongoose
const mongoose = require('mongoose')

//conectar ao mongoose
mongoose.connect('mongodb://localhost/newlinks', { useUnifiedTopology: true })

let db = mongoose.connection;

//comandos para verificar o banco de dados
db.on("error", () => { console.log("Houve um erro") })
db.once("open", () => { console.log("Banco carregado") })

//comando do express para redirecionar uma das rotas desejadas
app.use('/', linkRouter)

//abrir uma porta para o server
app.listen(port, () => console.log(`App escutando a porta ${port}`))