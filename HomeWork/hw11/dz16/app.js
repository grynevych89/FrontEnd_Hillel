'use strict';

let arrOfItem = [];

function createItem(name, category, count, price) {
    let item = {};
    item.name = name;
    item.category = category;
    item.count = count;
    item.price = price;
    arrOfItem.push(item);
}

// Створення масиву товарів

createItem('Mercedes', 'Cars', 2, 100000);
createItem('Toyota', 'Cars', 3, 50000);
createItem('Galaxy', 'Phones', 10, 10000);
createItem('IPhone', 'Phones', 5, 20000);
createItem('Shirt', 'Closes', 15, 200);

let categories = [];
for (let i = 0; i < arrOfItem.length; i++) {
    if (!categories.includes(arrOfItem[i].category)) {
        categories.push(arrOfItem[i].category)
    } else continue;
}

const DivLeft = document.querySelector('.left-col');
const DivCenter = document.querySelector('.center-col');
const DivRight = document.querySelector('.right-col');


function createList(ulItem, nameOfClass, spanClass, liItem, spanItem, item) {
    ulItem.className = nameOfClass;
    ulItem.append(liItem);
    liItem.append(spanItem);
    spanItem.className = spanClass;
    spanItem.innerHTML = item;
}

const categoryList = document.createElement('ul');
DivLeft.append(categoryList);

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
    for (let i = 0; i < arrOfItem.length; i++) {
        if (arrOfItem[i].category === categoryName) {
            itemsOfCategory.push(arrOfItem[i].name);
        } else continue;
    }

    itemsOfCategory.forEach(item => {

        const nameCell = document.createElement('li');
        nameCell.className = 'cell';
        const name = document.createElement('span');

        createList(nameList, "names", "name", nameCell, name, item);

        name.addEventListener("click", handlerGoods);
    })
}

function handlerGoods() {
    DivRight.querySelector('ul')?.remove();
    DivRight.querySelector('button')?.remove();
    const productList = document.createElement('ul');
    DivRight.append(productList);

    let productInfo = [];

    const productName = this.innerHTML;

    for (let i = 0; i < arrOfItem.length; i++) {
        if (arrOfItem[i].name === productName) {
            for (let key in arrOfItem[i]) {
                let goodsProperty = key;
                goodsProperty = goodsProperty[0]?.toUpperCase() + goodsProperty.slice(1);
                let goodsResult = goodsProperty + ': ' + arrOfItem[i][key];
                productInfo.push(goodsResult);
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
    button.innerHTML = "Купить";
    button.onclick = function () {
        alert(`Товар "${productName}" был куплен`);
        DivCenter.querySelector('ul')?.remove();
        DivRight.querySelector('ul')?.remove();
        DivRight.querySelector('button')?.remove();
    };
}
