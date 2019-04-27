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

// const newArray = people.map(person => {
//   let imageURL = getLastNumber(person.url)
//   return {
//   name: person.name,
//   home: foundWorld.name,
//   skin: person.skin_color,
//   eye: person.eye_color,
//   hair: person.hair_color,
//   imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`
//   }
// })


console.log(allHomeWorlds)

const mainContainer = document.querySelector(".container")

// --------------------------Create the front of the Card----------------------------------------
const swCardFront = allHomeWorlds.forEach((cardFront) => {
  cardFront = document.createElement("div")
  cardFront.className = "card__face card__face--front"
  let figure = document.createElement("figure")
  let caption = document.createElement("figcaption")
  let imageElement = document.createElement("img")

  imageElement.src = cardFront.imagePath

  figure.appendChild(imageElement)
  figure.appendChild(caption)
  cardFront.appendChild(figure)
  return cardFront
//   console.log(cardFront)
})

// --------------------------Create the data on back of Card----------------------------------------
const swCardInfo = allHomeWorlds.forEach((cardInfo) => {
  cardInfo = document.createElement("div")
  cardInfo.className = 'cardInfo'
  let planetElement = document.createElement("h1")
  let skinElement = document.createElement("h1")
  let eyeElement = document.createElement("h1")
  let hairElement = document.createElement("h1")

  let strHome = "Homeworld: "
  let strSkin = "Skin Color: "
  let strEye = "Eye Color: "
  let strHair = "Hair Color: "

  cardInfo.className = "box"
  planetElement.textContent = strHome + cardInfo.home
  skinElement.textContent = strSkin + cardInfo.skin
  eyeElement.textContent = strEye + cardInfo.eye
  hairElement.textContent = strHair + cardInfo.hair

  cardInfo.appendChild(planetElement)
  cardInfo.appendChild(skinElement)
  cardInfo.appendChild(eyeElement)
  cardInfo.appendChild(hairElement)
  mainContainer.appendChild(cardInfo)
  return cardInfo
// console.log(cardInfo)
})

// --------------------------Create the back of the Card----------------------------------------
const swCardBack = allHomeWorlds.forEach((cardBack) => {
  cardBack = document.createElement("div")
  let backImage = document.createElement("img")
  backImage.className = "backImage"
  backImage.src = "./pics/pokeball5.jpg"
  cardBack.className = "card__face card__face--back"
  cardBack.appendChild(backImage)
  cardBack.appendChild(swCardInfo)
  return cardBack
})

// ---------------------------------Create's the Card-------------------------------------------
allHomeWorlds.forEach((createCard) => {
  createCard = document.createElement("div")
  createCard.className = "createCard"
  let card = document.createElement("div")
  card.className = "card"

  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped")
  })

  card.appendChild(swCardFront(cardFront))
  card.appendChild(swCardBack(cardBack))

  createCard.appendChild(card)
  mainContainer.appendChild(createCard)
})

document.body.appendChild(mainContainer)

// -------------------
//console.log(createCard)
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
