const express = require('express');
const router = express.Router()

const linkController = require('../controllers/linkController')

//esse arquivo contem as rotas criadas!
//A ordem importa
// Se tivermos um arquivo criado com nome all, ele vai redirecionar para a pagina do link adicionado
// como nao queremos isso, a rota all precisa vir listada antes

router.get('/all', linkController.allLinks);

//criando o metodo get para enviar alguma informacao ao carregar a pagina
router.get('/', (req, res) => res.send('Hello World!'))

//criando o metodo post e enviando as informacoes disponiveis no body
router.post('/', express.urlencoded({ extended: true }), linkController.addLink);

//criando o metodo para redirecionar para o link desejado de acordo com o title da url
router.get('/:title', linkController.redirect)

module.exports = router