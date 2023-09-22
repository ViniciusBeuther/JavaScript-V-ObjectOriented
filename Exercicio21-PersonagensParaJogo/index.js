import { Character } from "./Character.js"
import { Thief } from "./Thief.js"
import { Mage } from './Mage.js'

// Params = name, life, attack, defence
const vinicius = new Mage('Vinicius', 20, 5, 5, 15)
const carla = new Character('Carla', 30, 1, 1)
const paulo = new Thief('Paulo', 10, 7, 2)

// Initicial status
console.log(vinicius)
console.log(carla)

// Attacking
carla.attack(vinicius)


// HP after attacked
console.log(vinicius)
console.log(carla)

// Paulo attacking Carla
paulo.attack(carla)
console.log(carla)

// Healing Carla
vinicius.heal(carla)
console.log(carla)

// Attacking Paulo
vinicius.attack(paulo)
console.log(paulo)




