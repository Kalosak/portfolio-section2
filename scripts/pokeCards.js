import { pokemon } from '../scripts/pokemon.js'

class Pokemon {
    constructor(id) {
        this.id = id
    }
}

const mainContainer = document.querySelector('.container')

function createPokeCard(pokeData) {
    let card = document.createElement('div')
    card.className = 'box'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')

    //let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
    caption.textContent = pokeData.name
    if(pokeData.id !== 0) {
        image.src = `../images/${pokeData.imageID}${pokeData.name}.png`
    } else {
        image.src = `../images/pokeball.png`
    }
    
    figure.appendChild(image)
    figure.appendChild(caption)
    card.appendChild(figure)
    mainContainer.appendChild(card)
}

// pokemon.forEach(singleMon => {
//     fetch(singleMon.url)
//     .then(function(response) {
//       return response.json()
//     })
//     .then(function(myJson) {
//       createPokeCard(myJson)
//     })
// })

function fetchSinglePokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(function(response) {
        return response.json()
    })
    .then(function(retrievedPokemon) {
        console.log(typeof(retrievedPokemon.id))
        if(retrievedPokemon.id < 10) {
            retrievedPokemon.imageID = "00" + retrievedPokemon.id
        }
        if(retrievedPokemon.id > 9 && retrievedPokemon.id < 100 ) {
            retrievedPokemon.imageID = "0" + retrievedPokemon.id
        }
        if(retrievedPokemon.id > 99) {
            retrievedPokemon.imageID = retrievedPokemon.id
        }
        retrievedPokemon.name = retrievedPokemon.name.charAt(0).toUpperCase() + retrievedPokemon.name.slice(1)
        createPokeCard(retrievedPokemon)
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
