const LinkModel = require('../models/Link')

//esse arquivo contem as acoes que serao executadas em cada rota montada

const redirect = async (req, res) => {
    let title = req.params.title;
    try{
        let doc = await LinkModel.findOne({ title })
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send(error);
    }
}

const addLink = async (req,res) => {
	let link = new LinkModel(req.body) //body eh de onde virao os dados
	//tentar salvar na base
	try{
		let doc = await link.save()
        res.send("Link adicionado");
	}catch(error){res.send(error)}
}

const allLinks = async (req, res) => {
    try {
        let links = await Link.find({}); //vazio busca todos os links
        res.send(links);

    } catch {
        res.send(error);

    }
}

module.exports = { redirect, addLink, allLinks }