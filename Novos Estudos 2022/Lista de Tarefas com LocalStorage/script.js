var listaDeItens = ""

function setLista(){
    var novoItem = document.getElementById("input").value;
    listaDeItens += `<li>${novoItem}</li>`;
    localStorage.setItem("lista", listaDeItens);
    getLista();
    document.getElementById("input").value = "";
}

function getLista(){
    document.getElementById("lista").innerHTML = localStorage.getItem("lista");
}

function clearLista(){
    localStorage.removeItem("lista");
    document.getElementById("input").value = "";
    getLista();
}