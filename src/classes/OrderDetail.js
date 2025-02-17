class OrderDetail {
    #quantity;
    #dessertID;
    #orderDetailID;

    constructor(quantity, dessertID, orderDetailID) {
        this.#quantity = quantity;
        this.#dessertID = dessertID;
        this.#orderDetailID = orderDetailID;
    }

    // Getter and Setter
    getQuantity() {
        return this.#quantity;
    }

    setQuantity(quantity) {
        this.#quantity = quantity;
    }

    getDessertID() {
        return this.#dessertID;
    }

    setDessertID(dessertID) {
        this.#dessertID = dessertID;
    }

    getOrderDetailID() {
        return this.#orderDetailID;
    }

    setOrderDetailID(orderDetailID) {
        this.#orderDetailID = orderDetailID;
    }
}

export default OrderDetail;
