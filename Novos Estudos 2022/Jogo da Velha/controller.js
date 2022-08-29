//controller - controlador
//model view controller

//linka o modelo com as regras de negócio e o view. recebe os inputs e traduz.

//eventlistener de carregamento do DOM
document.addEventListener('DOMContentLoaded', ()=>{
    //adiciona todos os quadrados a uma variavel
    let squares = document.querySelectorAll(".square");

    //adiciona um eventlistener de click pra todos os quadrados
    squares.forEach((square) => {
        //ao ser clicado chama a funcao handleClick
        square.addEventListener("click", handleClick);
    })
})

function handleClick(event){
    //encontra o elemento clicado
    let square = event.target;

    //pega o position atraves do id do elemento
    let position = square.id;

    if(
    //chama o handlemove
    handleMove(position)){
        setTimeout(() => {
            alert("O Jogo Acabou - O Vencedor foi o jogador " + playerTime + " com a jogada " + jogadaVencedora)
        }, 100);
    };

    //atualiza o tabuleiro
    updateSquares();
}

function updateSquares(){
        //adiciona todos os quadrados a uma variavel
        let squares = document.querySelectorAll(".square");

        squares.forEach((square) => {
            let position = square.id;
            let symbol = board[position];

            if (symbol != ""){
                square.innerHTML = `<div class="${symbol}"></div>`
            } else {
                square.innerHTML = ""
            }
        })

}

