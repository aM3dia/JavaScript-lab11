/*setting up classes
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
        return `Product: ${this.name}, Price: ${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
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

//total inventory value before discount
console.log("Total inventory value before discount: $" + store.getInventoryValue().toFixed(2));

//15% discount
ProductProperties.applyDiscount(store.inventory, 0.15);

//updated inventory information after discount
console.log("Updated Product Information:");
store.inventory.forEach(product => console.log(product.toString()));

//total inventory value after discount
console.log("Total inventory value after discount: $" + store.getInventoryValue().toFixed(2));

//find and print product
const foundProduct = store.findProductByName("Apple");
console.log("Found Product:");
console.log(foundProduct ? foundProduct.toString() : "Product not found");*/

//list of products
const products = [
    { name: "Apple", price: 2.5, quantity: 50 },
    { name: "Banana", price: 1.8, quantity: 10 },
    { name: "Cereal", price: 2.5, quantity: 2, expirationDate: "2025-02-05" },
    { name: "Milk", price: 1.5, quantity: 10, expirationDate: "2025-01-10" },
    { name: "Bread", price: 1.5, quantity: 2, expirationDate: "2024-12-30" },
    { name: "Cheese", price: 7.0, quantity: 2, expirationDate: "2025-01-01" }
];

//total inventory value before discount
function getInventoryValue() {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}
//display products
function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';  // Clear existing list
    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)} x ${product.quantity}`;
        if (product.expirationDate) {
            listItem.textContent += `, Expiration Date: ${product.expirationDate}`;
        }
        productList.appendChild(listItem);
    });
}

//15% discount
function applyDiscount() {
    products.forEach(product => {
        product.price -= product.price * 0.15;
    });
    //updated inventory value and product list
    updateInventoryValue();
    displayProducts();
}

//updated inventory information after discount
function updateInventoryValue() {
    const inventoryValue = getInventoryValue();
    document.getElementById('inventoryValue').textContent = `After Discount: $${inventoryValue.toFixed(2)}`;
}

//default display
displayProducts();