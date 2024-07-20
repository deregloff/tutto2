let currentIndex = -1;

let cards = [
    {
      name: "Poison",
      description: "If you roll a TUTTO, subtract your played score from the total score of a player of your choice, but you won't get any points. If you don't roll a TUTTO, score normally.",
      amount: 5,
      symbol: "poison.png",
      rarity: "Common"
    },
    {
      name: "Recession",
      description: "If you don't roll a TUTTO, decrease your total score by 25% after scoring or a null roll.",
      amount: 3,
      symbol: "recession.png",
      rarity: "Rare",
    },
    {
        name: "Depression",
        description: "If you don't roll a TUTTO, decrease your total score by 50% after scoring or a null roll.",
        amount: 1,
        symbol: "depression.png",
        rarity: "Legendary",
      },
    {
        name: "Growth",
        description: "If you roll a TUTTO, increase your total score by 25% after scoring.",
        amount: 3,
        symbol: "growth.png",
        rarity: "Rare",
      },
      {
        name: "Boom",
        description: "If you roll a TUTTO, increase your total score by 50% after scoring.",
        amount: 1,
        symbol: "boom.png",
        rarity: "Legendary"
      },
      {
        name: "Lucky 300",
        description: "Choose to either get 300 points now but don't roll the dice or play normally.",
        amount: 5,
        symbol: "lucky.png",
        rarity: "Common"
      },
      {
        name: "Lucky 500",
        description: "Choose to either get 500 points now but don't roll the dice or play normally.",
        amount: 3,
        symbol: "lucky.png",
        rarity: "Rare"
      },
      {
        name: "Lucky 800",
        description: "Choose to either get 800 points now but don't roll the dice or play normally.",
        amount: 1,
        symbol: "lucky.png",
        rarity: "Legendary"
      },
      {
        name: "Low Quality Healthpack",
        description: "If you roll a NULL, you can reroll, but you have to subtract 100 points from your total score per rerolled dice.",
        amount: 5,
        symbol: "healthpack.png",
        rarity: "Common"
      },
      {
        name: "High Quality Healthpack",
        description: "If you roll a NULL, you can reroll, but you have to subtract 50 points from your total score per rerolled dice.",
        amount: 3,
        symbol: "healthpack.png",
        rarity: "Rare"
      },

    {
      name: "Unlucky 300",
      description: "If you roll a NULL, subtract 300 points from your total score.",
      amount: 5,
      symbol: "unlucky.png",
      rarity: "Common"
    },
    {
        name: "Unlucky 500",
        description: "If you roll a NULL, subtract 500 points from your total score.",
        amount: 3,
        symbol: "unlucky.png",
        rarity: "Rare"

      },
      {
        name: "Unlucky 800",
        description: "If you roll a NULL, subtract 800 points from your total score.",
        amount: 1,
        symbol: "unlucky.png",
        rarity: "Legendary"

      },
      {
        name: "Fireworks",
        description: "All scoring dice must be set aside. You still score, even if you have a NULL. If you roll a tutto, you can continue, but don't draw a new card.",
        amount: 5,
        symbol: "fireworks.png",
        rarity: "Common"
      },
      {
        name: "Stop",
        description: "Your turn ends immediately.",
        amount: 5,
        symbol: "stop.png",
        rarity: "Common"
      },
      {
        name: "Bonus 300",
        description: "If you roll a TUTTO, you get 300 bonus points.",
        amount: 5,
        symbol: "bonus.png",
        rarity: "Common"
      },
      {
        name: "Bonus 500",
        description: "If you roll a TUTTO, you get 500 bonus points.",
        amount: 3,
        symbol: "bonus.png",
        rarity: "Legendary"
      },
      {
        name: "Bonus 800",
        description: "If you roll a TUTTO, you get 800 bonus points.",
        amount: 1,
        symbol: "bonus.png",
        rarity: "Legendary",
      },
      {
        name: "Double",
        description: "If you roll a tutto, you double your score.",
        amount: 3,
        symbol: "double.png",
        rarity: "Rare"
      },
      {
        name: "Steal",
        description: "If you roll a TUTTO, steal 1000 points from the player with the highest score. If you no player has 1000 or more total score, skip your turn.",
        amount: 5,
        symbol: "steal.png",
        rarity: "Common"
      },
      {
        name: "Lucky Clover",
        description: "Try to roll  TUTTO two times in a row. If you succeed, you win the game. If you fail, you don't get any points.",
        amount: 3,
        symbol: "clover.png",
        rarity: "Rare"
      },
      {
        name: "Two Much",
        description: "Immediatly subtract 50 points for every rolled two",
        amount: 5,
        symbol: "twomuch.png",
        rarity: "Common"
      },
      {
        name: "Mind Control",
        description: "The player on your left can decide once this round which dices you have to reroll (max. 3).",
        amount: 5,
        symbol: "mindcontrol.png",
        rarity: "Common"
      },
      {
        name: "Plus one",
        description: "Add plus one to a dice of your choice this round.",
        amount: 5,
        symbol: "plusone.png",
        rarity: "Common"
      },
      {
        name: "Minus one",
        description: "Subtract one to a dice of your choice this round.",
        amount: 3,
        symbol: "minusone.png",
        rarity: "Rare"
      },
      {
        name: "Double Round",
        description: "You can draw a new card even if you don't roll a tutto.",
        amount: 3,
        symbol: "doubleround.png",
        rarity: "Rare"
      },
      {
        name: "Mild Dyscalculia",
        description: "Every rolled 4 counts as a 5.",
        amount: 5,
        symbol: "dyscalculia.png",
        rarity: "Common"
      },
      {
        name: "Severe Dyscalculia",
        description: "Every rolled 2 counts as a 1.",
        amount: 3,
        symbol: "dyscalculia.png",
        rarity: "Rare"
      },
      {
        name: "Fatal Dyscalculia",
        description: "Every rolled 2 counts as a 1 and every rolled 4 counts as 5.",
        amount: 1,
        symbol: "dyscalculia.png",
        rarity: "Legendary"
      },



    
    
  ];

  function deckStarter(cardTypes) {
    let deck = [];

    cardTypes.forEach(cardType => {
        for (let i = 0; i < cardType.amount; i++) {
            deck.push({
                name: cardType.name,
                description: cardType.description,
                symbol: cardType.symbol,
                rarity: cardType.rarity
            });
        }
    });

    return shuffleDeck(deck);
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    updateCardDisplay(currentIndex, deck);
    return deck;
}



deck = deckStarter(cards);
console.log(deck);


function updateCardDisplay(deckIndex, deck) {
    currentIndex ++;
    console.log(currentIndex)
    if (currentIndex < deck.length) { 
        deckIndex = currentIndex;
        const card = deck[deckIndex];
        console.log(card);
        const cardTitleElement = document.querySelector('.cardName');
        const cardDescriptionElement = document.querySelector('.cardDescription');
        const cardImageElement = document.querySelector('.cardImage');
        const cardRarityElement = document.querySelector('.cardRarity');

        const cardCounter = document.querySelector('.cardCounter');


        cardTitleElement.textContent = card.name;
        cardDescriptionElement.textContent = card.description;
        cardImageElement.src = "symbols/" + card.symbol;
        
        cardRarityElement.textContent = card.rarity;
        const classListRarity = cardRarityElement.className.split(' ');
        classListRarity[classListRarity.length - 1] = card.rarity+ 'Box';
        cardRarityElement.className = classListRarity.join(' ');



        cardCounter.textContent = deck.length - 1 - currentIndex;
        
        const cardElement = document.getElementById('card');
        const classList = cardElement.className.split(' ');
        classList[classList.length - 1] = card.rarity+ 'Shadow';
        cardElement.className = classList.join(' ');
    } else {
        currentIndex = -1;
        shuffleDeck(deck);
    }
}

const button = document.getElementById('nextCardButton');
button.addEventListener('click', function() {
    updateCardDisplay(currentIndex, deck);
});

console.log(deck.length)