import { Character } from "./Character.js"
import { Thief } from "./Thief.js"
import { Mage } from './Mage.js'
import { Warrior } from './Warrior.js'


// Params = name, life, attack, defence
const vinicius = new Mage('Vinicius', 20, 5, 5, 15)
const carla = new Character('Carla', 30, 1, 1)
const paulo = new Thief('Paulo', 10, 7, 2)
const warrior = new Warrior('Warrior Player', 10, 10, 10, 10, 'attack')
// name, hp, attk, def, shield, position


// Initicial status
console.log(vinicius)
console.log(carla)
console.log(warrior)

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

// Changing Warrior position
warrior.changePosition()
warrior.changePosition()
console.log(warrior)

// Testing warrior attack
console.log(vinicius)
warrior.attack(vinicius)
console.log(vinicius)

// Trying to attack in defence position (can not attack in this position)
warrior.changePosition()
warrior.attack(vinicius)




