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

const mainContainer = document.querySelector(".container")

allHomeWorlds.forEach((person) => {
    let personElement = document.createElement('div')
    let personName = document.createElement('h1')
    // let planetElement = document.createElement('h1')
    // let skinElement = document.createElement('h1')
    // let eyeElement = document.createElement('h1')
    // let hairElement = document.createElement('h1')
    let imageElement = document.createElement('img')

    // let strHome = "Homeworld: "
    // let strSkin = "Skin Color: "
    // let strEye = "Eye Color: "
    // let strHair = "Hair Color: "

    personElement.className = 'box'
    personName.textContent = person.name
    personName.className = 'personName'
    // planetElement.textContent = strHome + person.home
    // skinElement.textContent = strSkin + person.skin
    // eyeElement.textContent = strEye + person.eye
    // hairElement.textContent = strHair + person.hair

    imageElement.src = person.imagePath
   
    // personElement.appendChild(planetElement)
    // personElement.appendChild(skinElement)
    // personElement.appendChild(eyeElement)
    // personElement.appendChild(hairElement)
    personElement.appendChild(personName)
    personElement.appendChild(imageElement)
    mainContainer.appendChild(personElement)
})

document.body.appendChild(mainContainer)
