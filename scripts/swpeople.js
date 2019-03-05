import { people } from '../data/people.js'
import { planets } from '../data/planets.js'

const men = people.filter(person => person.gender == 'male')
const women = people.filter(person => person.gender == 'female')
const other = people.filter(person => (person.gender == 'n/a') || (person.gender == 'hermaphrodite') || (person.gender == 'none'))

// console.log(men, women, other)

const allHomeWorlds = people.map(person => {
    let foundWorld = {}
    let foundWorld = planets.find(element => {
        returnelement.url === person.homeworld
    })
    return {  name: person.name, home: person.homeworld}
})

console.log(allHomeWorlds)

// // console.log(allHomeWorlds)

// const peopleAndPlanets = [...people, ...planets]

// console.log(peopleAndPlanets)

// const homeWorld = planets.find(element) => {
//     console.log(element.url, element.homeworld) //element.url === element.homeworld
//   })
  
// console.log(homeWorld)

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

men.forEach((man) => {
    let manElement = document.createElement('div')
    manElement.className = 'box'
    manElement.textContent = man.name
    let eyeColor = document.createElement('p')
    eyeColor.textContent = man.eye_color
    manElement.appendChild(eyeColor)
    mainContainer.appendChild(manElement)
})

women.forEach((man) => {
    let manElement = document.createElement('div')
    manElement.className = 'box'
    manElement.textContent = man.name
    let eyeColor = document.createElement('p')
    eyeColor.textContent = man.eye_color
    manElement.appendChild(eyeColor)
    mainContainer.appendChild(manElement)
})

document.body.appendChild(mainContainer)