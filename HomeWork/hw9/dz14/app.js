'use strict';

const shoppingCart = {
    items: [
        {
            name: 'Headphone',
            count: 1,
            price: 100,
        }
    ],
    addItem(newItem) {
        const itemCheck = this.items.find(item => item.name.toLowerCase() === newItem.name.toLowerCase());
        itemCheck === undefined ? this.items.push(newItem) : itemCheck.count += newItem.count;
    },
    deleteItem(itemName) {
        const indexToDelete = this.items.findIndex(item => item.name.toLowerCase() === itemName.toLowerCase());
        indexToDelete !== (-1) ? this.items.splice(indexToDelete, 1) :
            console.log(`Такого товара "${itemName}" нет в корзине`);
    },
    getTotalSum(){
        return this.items.map(item => item.count * item.price).reduce((accum, currentValue) => accum + currentValue);
    },
    getAllItems(){
        console.log(this.items)
    },
};

console.log('>> Проверяем изначальную корзину')
shoppingCart.getAllItems();
console.log(' ')
console.log(' ')

// Добавим товары
console.log('>> Добавляем товары')
const addNewItem1 = {
    name: 'PC',
    count: 44,
    price: 1200,
}
shoppingCart.addItem(addNewItem1);

const addNewItem2 = {
    name: 'TV',
    count: 356,
    price: 599,
}
shoppingCart.addItem(addNewItem2);

shoppingCart.getAllItems();
console.log(`>> Общая стоимость товаров: ${shoppingCart.getTotalSum().toLocaleString('de-DE')} $`);
console.log(' ')
console.log(' ')

// Удалим один товар
shoppingCart.deleteItem("tv");
console.log('>> Удалили телики из корзины')
shoppingCart.getAllItems(); // Проверяем корзину после добавления/удаления товаров
console.log(`>> Общая стоимость товаров: ${shoppingCart.getTotalSum().toLocaleString('de-DE')} $`);
