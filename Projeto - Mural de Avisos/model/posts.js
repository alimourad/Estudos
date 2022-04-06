module.exports = {

    posts: [], //propriedade posts do objeto

    getAll(){ //metodo
        return this.posts;
    },

    newPost(title, description){

        this.posts.push(
            {
                id: genID(),
                title,
                description
            }
        )
    }

}

//function para gerar o ID
function genID(){
    return Math.random().toString(36).substring(2, 9);
}