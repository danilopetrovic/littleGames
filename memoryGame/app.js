const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.forEach(card => {
    cardArray.push(card);
})

cardArray.sort(() => 0.5 - Math.random())

const grid = document.getElementById('grid');
let cardsChosen = [];

(function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.append(card);
        // console.log(card);
    }
})();

function flipCard() {
    let cardID = this.getAttribute('data-id');
    cardsChosen.push({
        name: cardArray[cardID].name,
        id: cardID
    });
    // console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardID].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    let cards = document.querySelectorAll('img')
    if (cardsChosen[0].name === cardsChosen[1].name) {
        alert('Matched');
        cards[cardsChosen[0].id].setAttribute('src', 'images/white.png');
        cards[cardsChosen[1].id].setAttribute('src', 'images/white.png');
        cards[cardsChosen[0].id].removeEventListener('click', flipCard);
        cards[cardsChosen[1].id].removeEventListener('click', flipCard);
        cardsChosen = [];
    } else {
        cards[cardsChosen[0].id].setAttribute('src', 'images/blank.png');
        cards[cardsChosen[1].id].setAttribute('src', 'images/blank.png');
        cardsChosen = [];
    }
}