const FRONT = "cardFront"; //Representa as classes
const BACK = "cardBack";

let emojis = ['😢', //:cry:
    '😎', //smiling face w/ sunglass
    '😆', //:laughing:
    '🌝', //fullmoonwithface
    '🌞', //sunwithface
    '😃', //smiley
    '👿', //imp
    '🌜', //last quarter with face
    '😠', //angry
    '🤔']; //thinking

let lockMode = false;
let firstCard = null;
let secondCard = null;
let cards = null;
startGame();

function startGame(){

    let cards = createCard(emojis);
    shuffleCards(cards);
    initializeCards(cards);

}

function createCard(emojis){

    let cards = []; //array vazio

    for(let emoji of emojis){
        cards.push(createPair(emoji)); //para cara emoji, cria um par de cards
    }

    return cards.flatMap(pair=>pair); //quebra o array em um array de 20 elementos (ao invés de 10 pares)
}

function shuffleCards(cards){

    let currentIndex = cards.length; //último item do array
    let randomIndex = 0;

    /* passar por cada elemento do array através do index
        e envia esse elemento para o index gerado
    */

    while (currentIndex != 0){

        randomIndex = Math.floor(Math.random() * currentIndex); //número aleatório com valor máximo = currentIndex. Dessa forma não repete.
        currentIndex--;

        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]]; //invertendo a posição
    }

}

function initializeCards(cards){

    let gameBoard = document.getElementById("gameBoard");

     cards.forEach(card => {

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add('card');
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);

     })

}

function createPair(emoji){ //criar um  par de cartas para o emoji no parâmetro

    return [{
        id: createId(emoji), //cada par consiste de um array com dois objetos
        icon: emoji, //contém o emoji que foi inserido
        flipped: false
    },{
        id: createId(emoji),
        icon: emoji,
        flipped: false
    }]
}

function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);

}

function createCardFace(face, card, element){

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if (face === FRONT){
        let iconElement = document.createElement('p');
        iconElement.classList.add('imagem');
        iconElement.innerHTML = card.icon;
        cardElementFace.appendChild(iconElement);
    }else{
        cardElementFace.innerHTML = '&lt/&gt';
    }
    element.appendChild(cardElementFace);
}

function createId(emoji){
    return emoji = parseInt(Math.random() * 1000) //ID aleatório
}

function checkMatch(){
    return firstCard.icon === secondCard.icon
}

function clearCards(){
    firstCard = null;
    secondCard = null;
    lockMode = false;
}

function setCard (id){ //condição de checagem e travamento

    let cards = [];
    cardSelection = document.querySelectorAll(".card");

    console.log(cards)

    let card = this.cards.filter(card => card.id === id)[0];

    if (card.flipped || lockMode){
        return false
    }

    if (!firstCard){
        firstCard = card;
        return true;
    } else {
        secondCard = card;
        lockMode = true;
        return true;
    }
}

function flipCard(){

    id = this.id;

    if(setCard(id)){

        this.classList.add('flip');

        if(checkMatch()){

            clearCards();

        } else {

            setTimeout(()=>{
                let firstCardView = document.getElementById(firstCard.id);
                let secondCardView = document.getElementById(secondCardView.id);

                firstCardView.classList.remove('flip');
                secondCardView.classList.remove('flip');
                clearCards(); 
            }, 1000)
        }
    }
}