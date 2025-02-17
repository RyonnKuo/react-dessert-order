class ShoppingCart {
    #quantity;
    #dessertID;

    constructor(quantity, dessertID) {
        this.#quantity = quantity;
        this.#dessertID = dessertID;
    }

    // Getter and Setter for quantity
    getQuantity() {
        return this.#quantity;
    }

    setQuantity(quantity) {
        this.#quantity = quantity;
    }

    // Getter and Setter for dessertID
    getDessertID() {
        return this.#dessertID;
    }

    setDessertID(dessertID) {
        this.#dessertID = dessertID;
    }
}

export default ShoppingCart;
