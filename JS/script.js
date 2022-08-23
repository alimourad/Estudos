let numerosMais = [53, 10, 42, 5, 37, 33, 23, 4, 30, 28, 27, 41, 54, 34, 35, 29, 44, 16, 51, 11]
let numerosMenos = [60, 14, 09, 03, 48, 22, 15, 21, 55, 26]

function randMais(){

    let i = Math.floor(Math.random() * 20)
    let numIntm = numerosMais[i]
    return numIntm
}

function randMenos(){

    let i = Math.floor(Math.random() * 10)
    let numIntn = numerosMenos[i]
    return numIntn
}

function aleatorioTotal(){

    return Math.floor(Math.random() * 61)
    
}

// var numUm = randMenos()
// var numDois = randMenos()
// var numTres = randMais()
// var numQua = randMais()
// var numCin = randMais()
var resu = aleatorioTotal()
console.log(resu)