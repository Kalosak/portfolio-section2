import { people } from "../data/people.js"
import { planets } from "../data/planets.js"

const getLastNumber = url => {
  let end = url.lastIndexOf("/")
  let start = end - 2

  if (url.charAt(start) === "/") {
    start++
  }
  return url.slice(start, end)
}

const allHomeWorlds = people.map(person => {
  let foundWorld = planets.find(planet => {
    return planet.url === person.homeworld
  })
  let imageURL = getLastNumber(person.url)
  return {
    name: person.name,
    home: foundWorld.name,
    skin: person.skin_color,
    eye: person.eye_color,
    hair: person.hair_color,
    imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`
  }
})

console.log(allHomeWorlds)

const mainContainer = document.querySelector(".container")

// --------------------------Create the front of the Card----------------------------------------
allHomeWorlds.forEach((cardFront(person)) => {
  cardFront(person) {
    let cardFront = document.createElement("div")
    cardFront.className = "card__face card__face--front"
    let figure = document.createElement("figure")
    let caption = document.createElement("figcaption")
    let imageElement = document.createElement("img")

    imageElement.src = person.imagePath

    figure.appendChild(imageElement)
    figure.appendChild(caption)
    cardFront.appendChild(figure)
    return cardFront
  //   console.log(cardFront)
  }
})

// --------------------------Create the data on back of Card----------------------------------------
function cardInfo(swData) {
  let infoDiv = document.createElement("div")
  infoDiv.className = 'infoDiv'
  let planetElement = document.createElement("h1")
  let skinElement = document.createElement("h1")
  let eyeElement = document.createElement("h1")
  let hairElement = document.createElement("h1")

  let strHome = "Homeworld: "
  let strSkin = "Skin Color: "
  let strEye = "Eye Color: "
  let strHair = "Hair Color: "

  infoDiv.className = "box"
  planetElement.textContent = strHome + person.home
  skinElement.textContent = strSkin + person.skin
  eyeElement.textContent = strEye + person.eye
  hairElement.textContent = strHair + person.hair

  infoDiv.appendChild(planetElement)
  infoDiv.appendChild(skinElement)
  infoDiv.appendChild(eyeElement)
  infoDiv.appendChild(hairElement)
  mainContainer.appendChild(infoDiv)
  return infoDiv
// console.log(infoDiv)
}

// --------------------------Create the back of the Card----------------------------------------
function cardBack(swData) {
  let cardBack = document.createElement("div")
  let backImage = document.createElement("img")
  backImage.className = "backImage"
  backImage.src = "./pics/pokeball5.jpg"
  cardBack.className = "card__face card__face--back"
  cardBack.appendChild(backImage)
  cardBack.appendChild(cardInfo(swData))
  return cardBack
}

// ---------------------------------Create's the Card-------------------------------------------
function createCard(swData) {
  let scene = document.createElement("div")
  scene.className = "scene"
  let card = document.createElement("div")
  card.className = "card"

  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped")
  })

  card.appendChild(cardFront(swData))
  card.appendChild(cardBack(swData))

  scene.appendChild(card)
  mainContainer.appendChild(scene)
}

const allFetchedPeople = []

// -------------------


allHomeWorlds.forEach((person) => {
    createCard()
})
// swPerson.forEach((swPerson) => {
//   fetch(swPerson.url)
//     .then(function(response) {
//       return response.json()
//     })
//     .then(function(myJson) {
//       allFetchedPeople.push(myJson)
//       createCard(myJson)
//       createCard(matchIdToImage(myJson))
//     })
// })

document.body.appendChild(mainContainer)

// -----------------

// function fetchSinglePerson(id) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then(function(response) {
//       return response.json()
//     })
//     .then(function(retrievedPerson) {
//       createPokeCard(retrievedPerson)
//     //   createPokeCard(matchIdToImage(retrievedPerson))
//     })
// }

// const newButton = document.querySelector('#new')
// const findButton = document.querySelector('#fetchPerson')

// newButton.addEventListener('click', function() {
//     let pokeName = prompt('Create a new Pokemon!:')
//     createPokeCard(new Pokemon(pokeName))
// })

// selectPokemonButton.addEventListener('click', function() {
//     let pokemonID = prompt('Enter an ID of an existing pokemon:')
//     fetchSinglePokemon(pokemonID)
// })

// --------------------------------------------------------------------------------------------------------------------

// const mainContainer = document.querySelector(".container")

// allHomeWorlds.forEach((person) => {
//     let personElement = document.createElement('div')
//     let planetElement = document.createElement('h1')
//     let skinElement = document.createElement('h1')
//     let eyeElement = document.createElement('h1')
//     let hairElement = document.createElement('h1')
//     let imageElement = document.createElement('img')

//     let strHome = "Homeworld: "
//     let strSkin = "Skin Color: "
//     let strEye = "Eye Color: "
//     let strHair = "Hair Color: "

//     personElement.className = 'box'
//     personElement.textContent = person.name
//     planetElement.textContent = strHome + person.home
//     skinElement.textContent = strSkin + person.skin
//     eyeElement.textContent = strEye + person.eye
//     hairElement.textContent = strHair + person.hair

//     imageElement.src = person.imagePath

//     personElement.appendChild(planetElement)
//     personElement.appendChild(skinElement)
//     personElement.appendChild(eyeElement)
//     personElement.appendChild(hairElement)
//     personElement.appendChild(imageElement)
//     mainContainer.appendChild(personElement)
// })

// document.body.appendChild(mainContainer)
