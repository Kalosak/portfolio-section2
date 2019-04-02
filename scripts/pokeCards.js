import { pokemon } from '../scripts/pokemon.js'

class Pokemon {
    constructor(id) {
        this.id = id
    }
}

const mainContainer = document.querySelector('.container')

function cardFront(pokeData) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card__face card__face--front'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')

    caption.textContent = pokeData.name
    if(pokeData.id !== 0) {
        image.src = `../images/${pokeData.imageID}${pokeData.name}.png`
    } else {
        image.src = `../images/pokeball.png`
    }
    
    figure.appendChild(image)
    figure.appendChild(caption)
    cardFront.appendChild(figure)
    return cardFront
}

function cardBack(pokeData) {
    let cardBack = document.createElement('div')
    let backImage = document.createElement('img')
    backImage.className = 'backImage'
    backImage.src = './pics/pokeball5.jpg'
    cardBack.className = 'card__face card__face--back'
    cardBack.appendChild(backImage)
    return cardBack
}

function createPokeCard(pokeData) {
    let scene = document.createElement('div')
    scene.className = 'scene'
    let card = document.createElement('div')
    card.className = 'card'
    
    card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    })

    card.appendChild(cardFront(pokeData))
    card.appendChild(cardBack(pokeData))
    scene.appendChild(card)
    mainContainer.appendChild(scene)
}

pokemon.forEach(singleMon => {
    fetch(singleMon.url)
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
      createPokeCard(matchIdToImage(myJson))
    })
})

function matchIdToImage(aPokemon) {
    if(aPokemon.id < 10) {
        aPokemon.imageID = "00" + aPokemon.id
    }
    if(aPokemon.id > 9 && aPokemon.id < 100 ) {
        aPokemon.imageID = "0" + aPokemon.id
    }
    if(aPokemon.id > 99) {
        aPokemon.imageID = aPokemon.id
    }
    aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
    return aPokemon
}

function fetchSinglePokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(function(response) {
        return response.json()
    })
    .then(function(aPokemon) {
        console.log(typeof(aPokemon.id))
        
        createPokeCard(matchIdToImage(aPokemon))
    })
}


const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function() {
    let pokemonID = prompt('Enter an ID of an existing pokemon:')
    fetchSinglePokemon(pokemonID)
    if (pokemonID.length ===1){
      pokemonID ="00" +pokemonID
    }
  });
