let allProducts = []

class Product {
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0
        allProducts.push(this)
    }

    addToStock(quantity){
        this.inStock += quantity;
        console.log('Itens adicionados com sucesso!')
    }

    calculateDiscount(discount){
        const totalOfDiscount = this.price * ([discount / 100]);
        this.price = this.price - totalOfDiscount;
        console.log(`O preço com um desconto de ${discount}% é de R$ ${this.price}`)
    }
}

const Sabao = new Product("Sabao", "Lavar os pes", 10)
const Pastel = new Product("Pastel", "Frango com Catupiry", 3)
Sabao.calculateDiscount(50)
console.log(Sabao)

Pastel.addToStock(20)
console.log(allProducts[1])