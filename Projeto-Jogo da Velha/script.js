//script de interface, parte do código que conhece o html e o script.

document.addEventListener('DOMContentLoaded', () => { //Quando o dom for carregado, vai executar a função

    let squares = document.querySelectorAll('.quadrado'); //Pega todos com classe quadrado e guarda em squares

    squares.forEach((square) => {
        square.addEventListener('click', handleClick); //para cada item de squares, adiciona um event listener de click
    })

    let botaoResetar = document.getElementById('reset');
    botaoResetar.addEventListener('click', resetar);

})

function handleClick(e){
    let square = e.target;
    let position = square.id;

    handleMove(position);
    if (gameOver == true){
        setTimeout(() => {
        alert("fim de jogo"),10});
    }
    updateSquares();
}

function resetar(){
    board = ['','','','','','','','',''];
    player = 0;
    gameOver = false
    updateSquares();
}

function updateSquares(){

    let squares = document.querySelectorAll('.quadrado');

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != ""){
            square.innerHTML = symbol;
        } else if (symbol == ""){
            square.innerHTML = "";
        }
    })

}