class Property {
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter() {
        return this.price / this.area
    }
}

class Apartment extends Property {
    constructor (number, area, price){
        super(area, price) // Call the constructor to set initial properties
        this.number = number
    }

    getFloor(){
        return this.number.slice(0, -2) //slice is to remove the last 2 digits of the string
    }
}

class House extends Property { } // Herança
const land = new Property(100, 100000) // Creating a land
const someHouse = new House(120, 200000) //Creating a house object, son of Property class
const myApartment = new Apartment("201", 100, 160000) // Creating a new apartment, son of Property class, using Super to load the constructor

console.log(land.getPricePerSquareMeter())
console.log(someHouse.getPricePerSquareMeter())
console.log(myApartment.getFloor()) 

