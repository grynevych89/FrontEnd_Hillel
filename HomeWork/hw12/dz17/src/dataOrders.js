export const dataOrdersList = {
    initialCount: JSON.parse(localStorage.getItem('ordersCount')) || 0,
    orderLists: JSON.parse(localStorage.getItem('orders')) || [],
    idCurrentOrder: null,

    getNewOrderId() {
        this.initialCount++;
        localStorage.setItem('ordersCount', this.initialCount);
        return this.initialCount;
    },

    addOrder(productTitle, fio, city, adressNp, choosedPayment, count, desc) {
        if (!fio) return;
        this.orderLists.push(
            {
                id: this.getNewOrderId(),
                productTitle,
                fio,
                city,
                adressNp,
                choosedPayment,
                count,
                desc
            });
        this.saveInLocalStorage();
    },

    deleteOrder(id) {
        this.orderLists = this.orderLists.filter((item) => item.id !== +id);
        this.saveInLocalStorage()
    },

    getOrders() {
        return this.orderLists;
    },

    getOrdersById(id) {
        return this.orderLists.find((i) => i.id === +id);
    },

    saveInLocalStorage() {
        localStorage.setItem('orders', JSON.stringify(this.orderLists));
    }
};
