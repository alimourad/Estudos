
// Carne - 400 gr por pessoa (se for > 6h, 650gr)

// Cerveja - 1200 ml por pessoa (se for > 6h, 2000ml)

// Refrigerante/água - 1000 ml por pessoa ( se for > 6h, 1500ml)

// Crianças valem por 0,5

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carne;
    let cerveja;
    let agua;

    if (duracao > 6){
        carne = adultos * 0.65 + criancas * 0.65 / 2
        cerveja = adultos * 2
        agua = adultos * 1.5 + criancas * 1.5 / 2
    } else {
        carne = adultos * 0.4 + criancas * 0.4 / 2
        cerveja = adultos * 1.2
        agua = adultos * 1 + criancas * 1 / 2
    }

    resultado.innerHTML = `<p>Carne ${carne.toFixed(2)} Kg</p>`
    resultado.innerHTML += `<p>Cerveja ${cerveja.toFixed(2)} L</p>`
    resultado.innerHTML += `<p>Refrigerante e Água ${agua.toFixed(2)} L</p>`

}