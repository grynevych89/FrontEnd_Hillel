
export const dataOrdersList = {
    initialCount: JSON.parse(localStorage.getItem('ordersCount')) || 0,
    orderLists: JSON.parse(localStorage.getItem('orders')) || [],
    idCurrentOrder: null,

    getNewOrderId() {
        this.initialCount++;
        localStorage.setItem('ordersCount', this.initialCount);
        return this.initialCount;
    },

    addOrder(productTitle, price, fio, city, adressNp, choosedPayment, count, desc) {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (!fio) return;
        this.orderLists.push(
            {
                id: this.getNewOrderId(),
                date: `${day}-${month}-${year}`,
                productTitle,
                price,
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
        return this.orderLists.find((item) => item.id === +id);
    },

    saveInLocalStorage() {
        localStorage.setItem('orders', JSON.stringify(this.orderLists));
    }
};
