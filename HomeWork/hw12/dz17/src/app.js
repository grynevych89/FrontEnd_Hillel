import {showCategoryLists, showProductList, toggleClasses, showOrderList, showOrdersItem} from "./generateHtml.js";
import {data} from "./data.js";
import {dataOrdersList} from "./dataOrders.js";

const ulCategoryList = document.querySelector(".category-list");
const ulProductList = document.querySelector(".product-list");
const ulOrdersList = document.querySelector(".orders-list");
const ulOrdersItem = document.querySelector(".order-item");

const formAddCategory = document.forms.addNewCategory;
const formAddProduct = document.forms.addNewProduct;
const formAddOrder = document.forms.AddNewOrder;

const buttonCategory = document.querySelector("#menu-category-item");
const buttonOrders = document.querySelector("#menu-order-item");

const categoryAddUi = document.querySelector(".categoryAdd-ui");
const categoryListUi = document.querySelector(".categoryList-ui");
const productUi = document.querySelector(".product-ui");
const productAddUi = document.querySelector(".productAdd-ui");

const productOrderUi = document.querySelector(".productOrder-ui");
const orderListUi = document.querySelector(".order-listUi");
const orderItemUi = document.querySelector(".order-itemUi");
let modal = document.getElementById("orderModal");

buttonCategory.addEventListener('click', (e) => {
    e.preventDefault();
    categoryAddUi.classList.remove("hidden");
    categoryListUi.classList.remove("hidden");
    orderListUi.classList.add("hidden");
    orderItemUi.classList.add("hidden");
    productAddUi.classList.add("hidden");
})

buttonOrders.addEventListener('click', (e) => {
    e.preventDefault();
    categoryAddUi.classList.add("hidden");
    categoryListUi.classList.add("hidden");
    productUi.classList.add("hidden");
    productAddUi.classList.add("hidden");
    productOrderUi.classList.add("hidden");
    orderListUi.classList.remove("hidden");
})

formAddCategory.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = formAddCategory.titleNewCategory.value;
    formAddCategory.titleNewCategory.value = "";
    data.addCategory(title);
    showCategoryLists(data.getCategory(), ulCategoryList);
});

formAddProduct.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = formAddProduct.titleNewProduct.value;
    const count = formAddProduct.countNewProduct.value;
    const price = formAddProduct.priceNewProduct.value;
    const desc = formAddProduct.descNewProduct.value;
    formAddProduct.titleNewProduct.value = '';
    formAddProduct.countNewProduct.value = '';
    formAddProduct.priceNewProduct.value = '';
    formAddProduct.descNewProduct.value = '';
    data.addProduct(title, count, price, desc);
    showProductList(data.getCategoryById(data.idCurrentCategory), ulProductList);
});

formAddOrder.addEventListener('submit', (e) => {
    e.preventDefault();
    const productTitle = document.getElementById("productNameTitle").innerHTML;
    const productPrice = document.getElementById("productPriceId").innerHTML;
    const fio = formAddOrder.fioNewOrder.value;
    const city = formAddOrder.cityNewOrder.value;
    const adressNp = formAddOrder.adressNpNewOrder.value;
    const choosedPayment = formAddOrder.choosedPaymentNewOrder.value;
    const count = formAddOrder.countNewOrder.value;
    const desc = formAddOrder.descNewOrder.value;
    formAddOrder.fioNewOrder.value = "";
    formAddOrder.cityNewOrder.value = "";
    formAddOrder.adressNpNewOrder.value = "";
    formAddOrder.choosedPaymentNewOrder.value = "";
    formAddOrder.countNewOrder.value = "";
    formAddOrder.descNewOrder.value = "";
    dataOrdersList.addOrder(productTitle, productPrice, fio, city, adressNp, choosedPayment, count, desc);
    productOrderUi.classList.add("hidden");
    showOrderList(dataOrdersList.getOrders(), ulOrdersList);
});

ulCategoryList.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('li')) return;

    if (target.tagName === 'BUTTON') {
        const isDelete = confirm('Ви впевненні?');
        if (!isDelete) return;

        data.deleteCategory(e.target.closest('li').id);
        showCategoryLists(data.lists, ulCategoryList);
        ulProductList.innerHTML = "";
        return;
    }

    productOrderUi.classList.add("hidden");
    productUi.classList.remove("hidden");
    productAddUi.classList.remove("hidden");

    data.idCurrentCategory = +e.target.closest('li').id;
    showProductList(data.getCategoryById(data.idCurrentCategory), ulProductList);
    toggleClasses(target, e.currentTarget, 'is-active')
});

ulProductList.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('li')) return;

    if (target.tagName === 'BUTTON' && target.textContent === 'Delete') {
        const isDelete = confirm('Ви впевненні?');
        if (!isDelete) return;
        data.deleteProduct(e.target.closest('li').id);
    }

    if (target.tagName === 'BUTTON' && target.textContent === 'Buy') {
        const productId = target.dataset.id
        productAddUi.classList.add("hidden");
        productOrderUi.classList.remove("hidden");

        let productEl = modal.querySelector(".product-name");
        let productPriceEl = modal.querySelector(".product-price");

        const product = data.getCategoryById(data.idCurrentCategory).find((item) => item.id === +productId);
        productEl.innerHTML = product.title;
        productPriceEl.innerHTML = product.price;
    }

    ulProductList.innerHTML = '';

    showProductList(data.getCategoryById(data.idCurrentCategory), ulProductList)
});

ulOrdersList.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('li')) return;

    if (target.tagName === 'BUTTON') {
        const isDelete = confirm('Ви впевненні?');
        if (!isDelete) return;

        dataOrdersList.deleteOrder(e.target.closest('li').id);
        showOrderList(dataOrdersList.getOrders(), ulOrdersList);
        ulProductList.innerHTML = "";
        return;
    }

    dataOrdersList.idCurrentOrder = +e.target.closest('li').id;
    orderItemUi.classList.remove("hidden");
    showOrdersItem(dataOrdersList.getOrdersById(dataOrdersList.idCurrentOrder), ulOrdersItem);
    toggleClasses(target, e.currentTarget, 'is-active')
});

ulOrdersItem.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('li')) return;

    if (target.tagName === 'BUTTON') {
        const isDelete = confirm('Ви впевненні?');
        if (!isDelete) return;
        dataOrdersList.deleteOrder(e.target.closest('li').id);
    }

    ulOrdersItem.innerHTML = '';

    // showOrdersItem(dataOrdersList.getOrdersById(dataOrdersList.idCurrentOrder), ulOrdersItem)
});

showOrderList(dataOrdersList.orderLists, ulOrdersList);

showCategoryLists(data.lists, ulCategoryList);
