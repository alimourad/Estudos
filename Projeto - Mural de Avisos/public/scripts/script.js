document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
}) //esperar carregar a pagina para executar o update posts

function updatePosts(){


    //chamada pro back end, pegar todos os dados e criar cards para colocar na div
    //fetch(url, options).then(callback)
    fetch("http://192.168.0.12:3000/api/all").then(res => {
        return res.json() //retorna uma promise
    }).then(json => {
        let postElements = '';
        let posts = JSON.parse(json); //recebe o valor em json

        posts.forEach((post) => {  //criar um novo post element para cada post
            let postElement = `<div class="card mb-4" id="${post.id}">
                                <div class="card-header">
                                    <h5 class="'card-title">${post.title}</h5>
                                </div>
                                <div class="card-body">
                                    <div class="card-text">${post.description}</div>
                                </div>
                                </div>`

            postElements += postElement;
        })

        document.getElementById("posts").innerHTML = postElements;
    })

}

function newPost(){

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    //criar um objeto
    let post = {title, description};

    const options = {
        method: "POST",//metodo
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://192.168.0.12:3000/api/new", options).then(res => {
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    })
}