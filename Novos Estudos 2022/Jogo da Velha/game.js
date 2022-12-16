let board = ["", "", "", "", "", "", "", "", ""]; //tabuleiro
let playerTime = 0; //vez do jogador. Se 0 vez do jogardor 1, se 1 vez do jogador 2.
let symbols = ["o", "x"]; //simbolos
let jogadaVencedora;

let gameOver = false;

function handleMove(position){

    if (gameOver){
        return;
    }

    if(board[position]==""){
        //no tabuleiro na position do parametro, insere o simbolo de acordo com a vez do jogador
        board[position] = symbols[playerTime];

        gameOver = isOver();

        //mudando a vez do jogador
        playerTime = playerTime == 0 ? 1 : 0
    }
    
    return gameOver
}

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function isOver(){

    for(let i = 0; i<winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] && 
            board[pos1] != ""){
                jogadaVencedora = winStates[i];
                return true;
        }

        
    }

    return false;
}

function restartGame(){
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;
    updateSquares();
}

