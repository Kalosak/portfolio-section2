import { people } from '../data/people.js'
import { planets } from '../data/planets.js'

const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end -2

    if(url.charAt(start) === '/') {
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
        imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`,
        
    }
})

console.log(allHomeWorlds)

// --------------------------------------------------------------------------------------------------------


const mainContainer = document.querySelector('.container')

function cardFront(pokeData) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card__face card__face--front'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')

    caption.textContent = pokeData.name
    if(pokeData.id !== 0) {
        image.src = `images/${pokeData.imageID}${pokeData.name}.png`
    } else {
        image.src = `./pics/newPokeball.png`
    }
    
    figure.appendChild(image)
    figure.appendChild(caption)
    cardFront.appendChild(figure)
    return cardFront
}

function cardInfo(pokeData) {
    let infoDiv = document.createElement('div')
    infoDiv.className = 'infoDiv'
    let moveOne = document.createElement('p')
    let moveTwo = document.createElement('p')
    let moveThree = document.createElement('p')
    let moveFour = document.createElement('p')

    moveOne.textContent = pokeData.moves[0].move.name
    moveTwo.textContent = pokeData.moves[1].move.name
    moveThree.textContent = pokeData.moves[2].move.name
    moveFour.textContent = pokeData.moves[3].move.name
    
    infoDiv.appendChild(moveOne)
    infoDiv.appendChild(moveTwo)
    infoDiv.appendChild(moveThree)
    infoDiv.appendChild(moveFour)
    return infoDiv
}

function cardBack(pokeData) {
    let cardBack = document.createElement('div')
    let backImage = document.createElement('img')
    backImage.className = 'backImage'
    backImage.src = './pics/pokeball5.jpg'
    cardBack.className = 'card__face card__face--back'
    cardBack.appendChild(backImage)
    cardBack.appendChild(cardInfo(pokeData))
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

const allFetchedPokemon = []

pokemon.forEach(singleMon => {
    fetch(singleMon.url)
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
        allFetchedPokemon.push(myJson)
      createPokeCard(matchIdToImage(myJson))
    })
})

function matchIdToImage(aPokemon) {
    if (aPokemon.id === 0) {
        aPokemon.imageID = 0
    }
    if(aPokemon.id < 10) {
        aPokemon.imageID = "00" + aPokemon.id
    }
    if(aPokemon.id > 9 && aPokemon.id < 100 ) {
        aPokemon.imageID = "0" + aPokemon.id
    }
    if(aPokemon.id > 99) {
        aPokemon.imageID = aPokemon.id
    }

    if(aPokemon.name === "mr-mime") {
        aPokemon.name = "mr. Mime"
    }

    if(aPokemon.name === "mime-jr") {
      aPokemon.name = "mime Jr."
    }

    let dashIndex = aPokemon.name.indexOf('-')
    if (dashIndex !== -1) {
        // Found a few pokemon who have a dash in their name
        aPokemon.name = aPokemon.name.slice(0, dashIndex)
    }
    aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
    return aPokemon
}
// --------------------------------------------------------------------------------------------------------















const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach((person) => {
    let personElement = document.createElement('div')
    let planetElement = document.createElement('h1')
    let skinElement = document.createElement('h1')
    let eyeElement = document.createElement('h1')
    let hairElement = document.createElement('h1')
    let imageElement = document.createElement('img')

    let strHome = "Homeworld: "
    let strSkin = "Skin Color: "
    let strEye = "Eye Color: "
    let strHair = "Hair Color: "

    personElement.className = 'box'
    personElement.textContent = person.name
    planetElement.textContent = strHome + person.home
    skinElement.textContent = strSkin + person.skin
    eyeElement.textContent = strEye + person.eye
    hairElement.textContent = strHair + person.hair

    imageElement.src = person.imagePath
   
    personElement.appendChild(planetElement)
    personElement.appendChild(skinElement)
    personElement.appendChild(eyeElement)
    personElement.appendChild(hairElement)
    personElement.appendChild(imageElement)
    mainContainer.appendChild(personElement)
})

document.body.appendChild(mainContainer)
