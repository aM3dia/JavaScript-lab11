//setting up classes
class ProductProperties {
    //intitalize the properties
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    //methods
    getTotalValue() {
        return this.price * this.quantity;
    }
    
    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
    }
}

const product = new ProductProperties("Apple", 2.5, 50);

console.log(product.getTotalValue());
console.log(product.toString());