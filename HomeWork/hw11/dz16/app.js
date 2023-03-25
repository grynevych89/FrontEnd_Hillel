'use strict';

let arrOfProducts = [];
function createItem(product, category, count, price) {
    let item = {};
    item.name = product;
    item.category = category;
    item.count = count;
    item.price = price;
    arrOfProducts.push(item);
}
// Добавляем товары
createItem('Молоко', 'Молочка', 20, 45);
createItem('Творог', 'Молочка', 20, 63);
createItem('Сметана', 'Молочка', 25, 48);
createItem('Апельсин', 'Фрукты', 30, 56);
createItem('Грейпфрукт', 'Фрукты', 35, 52);
createItem('Ноутбук', 'Техника', 40, 49999);
createItem('Телевизор', 'Техника', 45, 19999);

// Создаем категории и добавляем в них товары
// let categories = [];
// for (let i = 0; i < arrOfProducts.length; i++) {
//     if (!categories.includes(arrOfProducts[i].category)) {
//         categories.push(arrOfProducts[i].category)
//     }
// }
const categories = [...new Set(arrOfProducts.map((item) => item.category))]

categories.forEach(item => {
    const categoryCell = document.createElement('li');
    categoryCell.className = 'cell';
    const category = document.createElement('span');
    createList(categoryList, "categories", "category", categoryCell, category, item);
    category.addEventListener("click", handlerNames);
})


function handlerNames() {
    DivCenter.querySelector('ul')?.remove();
    const nameList = document.createElement('ul');
    DivCenter.append(nameList);
    let itemsOfCategory = [];

    const categoryName = this.innerHTML;
    for (let i = 0; i < arrOfProducts.length; i++) {
        if (arrOfProducts[i].category === categoryName) {
            itemsOfCategory.push(arrOfProducts[i].name);
        }

    }
    itemsOfCategory.forEach(item => {
        const nameCell = document.createElement('li');
        nameCell.className = 'cell';
        const name = document.createElement('span');
        createList(nameList, "names", "name", nameCell, name, item);
        name.addEventListener("click", handlerProducts);
    })
}

function handlerProducts() {
    DivRight.querySelector('ul')?.remove();
    DivRight.querySelector('button')?.remove();
    const productList = document.createElement('ul');
    DivRight.append(productList);
    let productInfo = [];
    const productName = this.innerHTML;
    for (let i = 0; i < arrOfProducts.length; i++) {
        if (arrOfProducts[i].name === productName) {
            for (let key in arrOfProducts[i]) {
                let productsProperty = key;
                productsProperty = productsProperty[0]?.toUpperCase() + productsProperty.slice(1);
                let productResult = productsProperty + ': ' + arrOfProducts[i][key];
                productInfo.push(productResult);
            }
        } else continue;
    }
    productInfo.forEach(item => {
        const productCell = document.createElement('li');
        productCell.className = 'cell';
        const productItem = document.createElement('span');
        createList(productList, "products", "product", productCell, productItem, item);
    })
    const button = document.createElement('button');
    DivRight.append(button);
    button.className = 'btn';
    button.innerHTML = "Купить";
    button.onclick = function () {
        alert(`Товар "${productName}" был куплен`);
        DivCenter.querySelector('ul')?.remove();
        DivRight.querySelector('ul')?.remove();
        DivRight.querySelector('button')?.remove();
    };
}
