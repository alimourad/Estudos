function setLista(){
    //ler o valor escrito no input
    var novoItem = document.getElementById("input").value;
    if (novoItem == "") throw 'Campo vazio';

    //puxar os itens salvos anteriormente
    var listaDeItens = localStorage.getItem("lista");

    //se a lista for nula, retornar string vazio. Evitar que imprima null na tela.
    listaDeItens = listaDeItens == null ? "" : listaDeItens;

<<<<<<< HEAD
=======
    //adicionar o valor do input na variavel e gravar
>>>>>>> e8dda6ae1418016bb121c33462db566b1dd4f917
    listaDeItens += `<li>${novoItem}</li>`;
    localStorage.setItem("lista", listaDeItens);

    //mostrar a lista na tela
    getLista();

    //limpar o input
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