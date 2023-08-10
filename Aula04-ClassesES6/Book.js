class Book {
    constructor (title) {
        this.title = title
        this.published = false
    }

    publish() {
        this.published = true
    }

}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

eragon.publish()

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book)
console.log([eragon, eldest] instanceof Array) //Object INSTANCEOF class, return if the object is an instance of Book class