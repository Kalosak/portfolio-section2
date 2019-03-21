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
        eye_color: person.eye_color,
        imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`,
        skin: person.skin_color,
    }
})

console.log(allHomeWorlds)

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach((person) => {
    let personElement = document.createElement('div')
    let planetElement = document.createElement('h1')
    let skinElement = document.createElement('h1')
    let imageElement = document.createElement('img')

    let strSkin = "Skin: "
    let strHome = "Homeworld: "

    personElement.className = 'box'
    personElement.textContent = person.name
    planetElement.textContent = strHome + person.home
    skinElement.textContent = strSkin + person.skin
    imageElement.src = person.imagePath
   
    
    personElement.appendChild(skinElement)
    personElement.appendChild(planetElement)
    personElement.appendChild(imageElement)
    mainContainer.appendChild(personElement)
})

document.body.appendChild(mainContainer)
