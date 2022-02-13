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

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    
    //Creating the game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/game_card_cover.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //checking for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert ("You've made a match!")
            cards[optionOneId].setAttribute('src', 'images/background.png')
            cards[optionTwoId].setAttribute('src', 'images/background.png')
            cardsWon.push(cardsChosen)
        }else {
            cards[optionOneId].setAttribute('src', 'images/game_card_cover.png')
            cards[optionTwoId].setAttribute('src', 'images/game_card_cover.png')
            alert ("No match, try again!")
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2){
            resultDisplay.textContent = "Congratulations! You found all the matches!"
        }
    }

    //flipCard function
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }

    }

    createBoard();
})
