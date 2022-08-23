const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

//esquema de como a informacao sera salva no db
const linkSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    click: Number
})

//todos os links da colecao seguem esse esquema
const LinkModel = mongoose.model('LinkModel', linkSchema)

//adicionar documento
let link = new LinkModel({
    title:"progbr",
    description: "Link para o twitter",
    url:"",
    click: 0,
})

//salvando o documento criado
link.save().then(doc => {
    console.log(doc)
}).catch(err => {console.log(err)})

//Esquema de pessoa
const personSchema = new mongoose.Schema({
    name: {type:String, required:true},
    age: Number
})

//Modelo de pessoa
const Person = mongoose.model('Person', personSchema);

//Adicionando pessoa
let person = new Person({
    name: "Ali",
    age: 10,
})

//salvando pessoa
person.save()


mongoose.connect('mongodb://localhost/links', {
    useNewUrlParser: true, //correcao feita por recomendacao da propria app
    useUnifiedTopology: true
})


let db = mongoose.connnection;

db.on("error", () => { console.log("houve um erro")});
//db.once("open", () => { console.log("banco carregado")});

//buscando um documento quando o usuario fizer uma requisicao
db.once("open", () => {
    console.log("Banco carregado");

    app.get('/:title', async (req, res) => { //ao digitar na url, busca o title na base com GET

        let title = req.params.title;

        // LinkModel.find({title:title}).then(doc => { //procura pelo title no modelo. poderia usar apenas 'title' por ter msm nome no objeto
        //     console.log(doc)
        //     res.send(doc);
        // })

        //usando async await para utilizar o doc fora do find.
        try {
            let doc = await LinkModel.find({title}) //valido caso tenha apenas um item de resposta. Outra opcao eh usar o findOne ou ler a array
            res.send(doc);
            res.redirect(doc.url);
        }catch(error){
            res.send(error);
        }
    })
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listeing on port ${port}`))