const PORT = 3000;
const express = require('express');
const apiRouter = require('./routes/api');

const path = require('path'); //para acessar os caminhos

const app = express();

app.use('/api', apiRouter);

app.use('/', express.static(path.join(__dirname, "public"))); //trabalhar com arquivos estaticos

//posts para poder enviar (enviado para posts.js)
// let posts = [
//     {
//         id: "1",
//         title: "Teste",
//         description: "Descrição teste."
//     },
// ] //Array de objetos(posts)

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})
