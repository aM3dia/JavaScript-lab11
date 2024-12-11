//setting up classes
class ProductProperties {
    //inititalize the properties
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

//list product
const product = new ProductProperties("Apple", 2.5, 50);

//output
console.log(product.getTotalValue());
console.log(product.toString());

//adding inheritance
class PerishableProductProperties extends ProductProperties {
    //initialize
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    //override
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

//list perishable
const milk = new PerishableProductProperties("Milk", 1.5, 10, "2025-01-10");
const bread = new PerishableProductProperties("Bread", 1.5, 2, "2024-12-30");

//output
console.log(milk.toString());
console.log(bread.toString());