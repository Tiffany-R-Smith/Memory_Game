document.addEventListener('DOMContentLoaded', () => {
    //Options for the memory cards
    const cardArray = [
        {
            name: 'candy',
            img: 'images/candy.png'
        },
        {
            name: 'candy',
            img: 'images/candy.png'
        },
        {
            name: 'cotton_candy',
            img: 'images/cotton_candy.png'
        },
        {
            name: 'cotton_candy',
            img: 'images/cotton_candy.png'
        },
        {
            name: 'cupcake',
            img: 'images/cupcake.png'
        },
        {
            name: 'cupcake',
            img: 'images/cupcake.png'
        },
        {
            name: 'donut',
            img: 'images/donut.png'
        },
        {
            name: 'donut',
            img: 'images/donut.png'
        },
        {
            name: 'ice_cream',
            img: 'images/ice_cream.png'
        },
        {
            name: 'ice_cream',
            img: 'images/ice_cream.png'
        },
        {
            name: 'lollipop',
            img: 'images/lollipop.png'
        },
        {
            name: 'lollipop',
            img: 'images/lollipop.png'
        }
    ]

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []
    
    //Creating the game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/game_card_cover.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    createBoard();

    //flipCard function
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }

    }
})
