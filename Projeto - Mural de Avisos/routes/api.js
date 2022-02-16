const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../model/posts');
const cors = require ('cors');

const options = {
    origin: "http://127.0.0.1:3000"
}

router.use(cors(options));


router.get("/all", (req, res) => {

    res.json(JSON.stringify(posts.getAll())) //precisa mandar uma string pelo res, não objeto
    //usa uma funcao para pegar o array do obj posts

});

router.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;

    //falta checagem de variaveis

    //posts.push({id, title, description}) //inserir um novo elemento dentro
    //escreve o objeto dessa forma cria uma valor e chave com comaptiveis

    posts.newPost(title, description);

    res.send("Post adicionado");
})

module.exports = router;