//Iniciar Variáveis
let board = ['','','','','','','','','']; //Será inserido X ou O
let player = 0;
let symbols = ['o', 'x']
let gameOver = false;

function handleMove(position){

    if(gameOver){
        return;
    }

    if(board[position] == ''){
        board[position] = symbols[player];

        gameOver = isWin();

        if(gameOver == false){
            if(player == 0){
                player = 1;
            }else{
                player = 0;
            }
        }
    }

    return gameOver;
}

function isWin(){

    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for ( let i = 0; i < winStates.length; i++){ //checando para cada item da array winStates
        let seq = winStates[i]; //separando cada possibilidade de posições

        let pos1 = seq[0]; //primeiro elemento do array em questão
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] &&
            board[pos1] != '') {//verificar cada elemento com o board
        
            return true;
        }
    }
    return false;
}