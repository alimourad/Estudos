let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne;
    let qtdTotalCerveja;
    let qtdTotalRefri;

    if (duracao < 6){
        qtdTotalCarne = adultos*400 + criancas*200
        qtdTotalCerveja = adultos*1.2
        qtdTotalRefri = adultos*1 + criancas*0.5
    } else {
        qtdTotalCarne = adultos*650 + criancas*650/2
        qtdTotalCerveja = adultos*2
        qtdTotalRefri = adultos*1.5 + criancas*1.5/2
    }

    resultado.innerHTML = `<p>${qtdTotalCarne} g de carne</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja} L de cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalRefri} L de refri</p>`
}