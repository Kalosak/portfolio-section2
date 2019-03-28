import { pokemon } from '../scripts/pokemon.js'

class Pokemon {
  constructor(id) {
    this.id = id
    // this.name = name
  }
}

console.log(pokemon)

const mainContainer = document.querySelector('.container')

function createPokeCard(pokeData) {
    let card = document.createElement('div')
    card.className = 'box'
    let figure = document.createElement('figure')
    let figcap = document.createElement('figcaption')
    // let title = document.createElement('h2')
    let image = document.createElement('img')

    let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
    // caption.textContent = upperName
    caption.textContent = pokeData.name
    if(pokeData.id !=0) {
      image.src = `../images/$(pokeData.id/$(upperName).png`
    } else {
      image.src
    }

    // title.textContent = upperName
    image.src = pokeData.sprites.front_shiny
    card.appendChild(title)
    card.appendChild(image)
    mainContainer.appendChild(card)
}

  figure.appendChild(image)
  figure.appendChild(caption)
  card.appendChild(figure)
  mainContainer.appendChild(card)

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
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  // .then(response => response.json())
  .then(function(response) {
    return response.json()
  })
  .then(function(retrievedPokemon) {
    retrievedPokemon.name = retrievedPokemon.name.charAt(0).toUpperCase() + retrievedPokemon.name.slice(1)
    createPokeCard(retrievedPokemon)
    // return myJson
  })
  // .then(myJson => createPokeCard(myJson))
}

const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function() {
  let pokemonID = prompt('Enter an ID of an existing Pokemon:')
  const retrievePokemon = fetchSinglePokemon(pokemonID)
  // fetchSinglePokemon(pokemonID)
  // if(pokemonID.length === 1) {
  //   pokemonID = "00" + pokemonID
  // }
  // createPokeCard(new Pokemon(pokemonID))
})