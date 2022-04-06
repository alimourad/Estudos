## Para iniciar o db
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" *Alterar a versão do mongodb*

## Para se conectar ao db
"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe" *Alterar a versão do mongodb*

## Criando um documento
`db.users.insertOne({name:"Igor", password:"1234", email:"contato@gmail.com"})`
Sendo *users* a coleção.
> Block quote

Para mais de um documento (múltiplos objetos): 
`db.users.insertMany([{name:"José"}, {name:"Marcela"}, {name:"Jonas"}])`

## Selecionando um documento
Primeira opção é usando o find.
`db.users.find()`

Para buscar apenas um.
`db.users.findOne()`

Para buscar número customizado.
`db.users.find().limit(2)`

Para usar o pretty na resposta.
`db.users.find().pretty()`

Para buscar um documento com uma regra específica.
`db.users.find({tel:"2345678"})`
`db.users.find({type:"admin"}).pretty()`

Para contar os documentos
`db.users.find().count()`

Para ordenar a resposta.
`db.users.find().sort({name: 1})`

## Update de documentos
Atualizando um documento.
`db.users.updateOne({name:"Marcela"}, {$set:{tel:"3334444}}})`

Atualizando todos os usuários.
`db.users.updateMany({},{$set{class:"2001"}})`

Remover de todos.
`db.users.updateMany({},{$unset:{class:""}})`

Fazer o update do elemento todo. Apagar tudo e reescrever.
`db.users.update({name:"Igor"},{name:"Igor", password:"33333"})`

Fazer o update e criar um novo elemento caso não encontre.
`db.users.update({name:"NomeNaoExistente},{name:"Igor", password:"333333"}, {upsert:true})`

Renomear uma propriedade.
`db.users.updateMany({}, {$rename:{visits:"views"}})`

Incrementar em 1
`db.users.updateOne({name:"Jonas"},{$inc:{views:1}})`

# Comandos
| show dbs | mostra os dbs criados |
| db | mosta do db atual |
| db.createCollection('nomedacoleção') | cria uma coleção no db selecionado |
| db.dropDatabase() | apaga o db selecionado |
| use local | muda para o db local; substituir local pelo nome do banco desejado |
| use blog | se blog não existe, quando criar uma coleção ele passará a existir |
| db.users.drop() | apaga a coleção 'users' |
| show collections | mostra todas as coleções |



