/*const book = {
    title: 'Eragon',
    year: '2002',
    pages: 460,
    published: true,
    inStock: 20,
    tags: ["Fantasy", "Adventure", "Medieval"],
    author: {
        name: "Christopher Paolini"
    },

    addOnStock(quantity){
        this.inStock += quantity
    },
    save: function (){
        //Save on Database
    }
}
*/

//Constructor use PascalCase
function Book(title, pages, tags, author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function (quantity){
        this.inStock += quantity
    }
    this.save = function () {
        //save on Database
    }
}

const author = { name: "Christopher Paolini"}
const tags = ["Fantasy", "Adventure", "Medieval"]

//Usamos para criar um novo objeto: new ObjName(Params)
const eragon = new Book("Eragon", 468, tags, author)
console.log(eragon)

const eldest = new Book("Eldest", 644, tags, author)
console.log(eldest)