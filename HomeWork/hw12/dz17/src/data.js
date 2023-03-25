export const data = {
    initialCount: JSON.parse(localStorage.getItem('count')) || 0,
    lists: JSON.parse(localStorage.getItem('data')) || [],
    idCurrentCategory: null,

    getNewId() {
        this.initialCount++;
        localStorage.setItem('count', this.initialCount);
        return this.initialCount;
    },

    addCategory(title) {
        if (!title.trim()) return;
        this.lists.push({id: this.getNewId(), title, items: []});
        this.saveInLocalStorage();
    },

    addProduct(title, count, price, desc) {
        if (!title) return;
        this.getCategoryById(this.idCurrentCategory)
            .push({id: this.getNewId(), title, count, price, desc});
        this.saveInLocalStorage();
    },

    deleteCategory(id) {
        this.lists = this.lists.filter((item) => item.id !== +id);
        this.saveInLocalStorage()
    },

    deleteProduct(id) {
        let list = this.getCategoryById(this.idCurrentCategory);
        const index = list.findIndex((item) => item.id === +id);
        list.splice(index, 1);
        this.saveInLocalStorage();
    },

    getCategory() {
        return this.lists;
        // return this.lists.getCategoryById(data.idCurrentCategory);
    },

    getCategoryById(id) {
        return this.lists.find((i) => i.id === +id).items;
    },

    saveInLocalStorage() {
        localStorage.setItem('data', JSON.stringify(this.lists));
    }
};
