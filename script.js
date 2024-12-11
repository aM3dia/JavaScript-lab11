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

    //static discount
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}

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

//inventory
class Store {
    constructor() {
        //store objects
        this.inventory = [];
    }
    //add to inventory
    addProducts(product) {
        this.inventory.push(product);
    }
    //return total value
    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }
    //find product
    findProductByName(name) {
        const product = this.inventory.find(p => p.name === name);
        //return product or null
        return product || null;
    }
}

//list of products
const apple = new ProductProperties("Apple", 2.5, 50);
const banana = new ProductProperties("Banana", 1.8, 10);
const cereal = new PerishableProductProperties("Cereal", 2.5, 2, "2025-02-05");
const milk = new PerishableProductProperties("Milk", 1.5, 10, "2025-01-10");
const bread = new PerishableProductProperties("Bread", 1.5, 2, "2024-12-30");
const cheese = new PerishableProductProperties("Cheese", 7.0, 2, "2025-01-01");

//add product to inventory
const store = new Store();
store.addProducts(apple);
store.addProducts(banana);
store.addProducts(cereal);
store.addProducts(milk);
store.addProducts(bread);
store.addProducts(cheese);

//array discount
const products = [cereal, milk, bread];

//apply discount
ProductProperties.applyDiscount(products, 0.05);

//log update product information
products.forEach(product => console.log(product.toString()));

//log total inventory value
console.log("Total inventory value is $" + store.getInventoryValue());

//find a product
const foundProduct = store.findProductByName("apple");
console.log(foundProduct ? foundProduct.toString() : "Product not found");