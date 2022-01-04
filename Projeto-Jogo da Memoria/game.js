let game = { //Entra tudo que for referente ao jogo e não a visualização.

    lockMode : false,
    firstCard : null,
    secondCard : null,

    checkMatch: function(){
        if(!this.firstCard || !this.secondCard){
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function(){
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unflipCards(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    emojis : ['😢', //:cry:
    '😎', //smiling face w/ sunglass
    '😆', //:laughing:
    '🌝', //fullmoonwithface
    '🌞', //sunwithface
    '😃', //smiley
    '👿', //imp
    '🌜', //last quarter with face
    '😠', //angry
    '🤔'], //thinking

    cards : null,

    createCard: function(){ //função transformada em um método

        this.cards = []; //array vazio
    
        for(let emoji of this.emojis){
            this.cards.push(this.createPair(emoji)); //para cara emoji, cria um par de cards
        }
    
        this.cards = this.cards.flatMap(pair=>pair); //quebra o array em um array de 20 elementos (ao invés de 10 pares)
        this.shuffleCards();
        return this.cards;
    },

    createPair: function(emoji){ //criar um  par de cartas para o emoji no parâmetro

        return [{
            id: this.createId(emoji), //cada par consiste de um array com dois objetos
            icon: emoji, //contém o emoji que foi inserido
            flipped: false,
        }, {
            id: this.createId(emoji),
            icon: emoji,
            flipped: false,
        }]
    },

    createId: function(){
        return emoji = parseInt(Math.random() * 1000) //ID aleatório
    },

    shuffleCards: function(){

        let currentIndex = this.cards.length; //último item do array
        let randomIndex = 0;
    
        /* passar por cada elemento do array através do index
            e envia esse elemento para o index gerado
        */
    
        while (currentIndex != 0){
    
            randomIndex = Math.floor(Math.random() * currentIndex); //número aleatório com valor máximo = currentIndex. Dessa forma não repete.
            currentIndex--;
    
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]]; //invertendo a posição
        }
    
    },

    setCard: function(id){

        //cardSelection = document.querySelectorAll(".card");
        let card = this.cards.filter(card => card.id == id)[0];
        console.log(card);

        if (card.flipped || this.lockMode){
            return false
        }

        if (!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }
    }

}