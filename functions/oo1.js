// Constructor Function
function Product(name, price, off = 0.50) {
    this.name = name
    this.price = price
    this.off = off

    this.priceOff = function() {
        return this.price * (1 - this.off)
    }
}

const p1 = new Product('Pen', 8.59)
console.log(`Product: ${p1.name}`)
console.log(`Price: ${p1.price}`)
console.log(`Off: ${p1.priceOff()}`)

const p2 = new Product('Notebook', 20.67)
console.log(`Product: ${p2.name}`)
console.log(`Price: ${p2.price}`)
console.log(`Off: ${p2.priceOff()}`)
