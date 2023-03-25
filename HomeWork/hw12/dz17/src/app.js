import {showCategoryLists, showProductList, toggleClasses, showOrderList} from "./generateHtml.js";
import {data} from "./data.js";
import {dataOrdersList} from "./dataOrders.js";

const ulCategoryList = document.querySelector(".category-list");
const ulProductList = document.querySelector(".product-list");
const ulOrdersList = document.querySelector(".orders-list");
const formAddCategory = document.forms.addNewCategory;
const formAddProduct = document.forms.addNewProduct;
const formAddOrder = document.forms.AddNewOrder;

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
    const productTitle = formAddOrder.productTitle.textContent;
    const fio = formAddOrder.fioNewOrder.value;
    const city = formAddOrder.cityNewOrder.value;
    const adressNp = formAddOrder.adressNpNewOrder.value;
    const choosedPayment = formAddOrder.choosedPaymentNewOrder.value;
    const count = formAddOrder.countNewOrder.value;
    const desc = formAddOrder.descNewOrder.value;
    formAddOrder.productTitle.textContent = "";
    formAddOrder.fioNewOrder.value = "";
    formAddOrder.cityNewOrder.value = "";
    formAddOrder.adressNpNewOrder.value = "";
    formAddOrder.choosedPaymentNewOrder.value = "";
    formAddOrder.countNewOrder.value = "";
    formAddOrder.descNewOrder.value = "";
    dataOrdersList.addOrder(productTitle, fio, city, adressNp, choosedPayment, count, desc);
    showOrderList(dataOrdersList.getOrders(), ulOrdersList);
});

ulCategoryList.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('li')) return;

    if (target.tagName === 'BUTTON') {
        const isDelete = confirm('Are you sure?');
        if (!isDelete) return;

        data.deleteCategory(e.target.closest('li').id);
        showCategoryLists(data.lists, ulCategoryList);
        ulProductList.innerHTML = "";
        return;
    }

    data.idCurrentCategory = +e.target.closest('li').id;

    showProductList(data.getCategoryById(data.idCurrentCategory), ulProductList);

    toggleClasses(target, e.currentTarget, 'is-active')
});

ulProductList.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('li')) return;

    if (target.tagName === 'BUTTON' && target.textContent === 'Delete') {
        const isDelete = confirm('Are you sure?');
        if (!isDelete) return;
        data.deleteProduct(e.target.closest('li').id);
    }

    if (target.tagName === 'BUTTON' && target.textContent === 'Buy') {
        const productId = target.dataset.id
        let modal = document.getElementById("orderModal");
        let productNameEl = modal.querySelector(".product-name");
        let span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

        const product = data.getCategoryById(data.idCurrentCategory).find((item) => item.id === +productId);
        productNameEl.innerHTML = product.title;
    }

    ulProductList.innerHTML = '';

    showProductList(data.getCategoryById(data.idCurrentCategory), ulProductList)
});

ulOrdersList.addEventListener('click', (e) => {
    const target = e.target;


    if (!target.closest('li')) return;

    if (target.tagName === 'BUTTON') {
        const isDelete = confirm('Are you sure?');
        if (!isDelete) return;

        dataOrdersList.deleteOrder(e.target.closest('li').id);
        showOrderList(dataOrdersList.getOrders(), ulOrdersList);
        ulProductList.innerHTML = "";
        return;
    }

    const productId = target.dataset.id
    let productNameEl = productId.querySelector(".product-name");
    const product = data.getCategoryById(data.idCurrentCategory).find((item) => item.id === +productId);
    productNameEl.innerHTML = product.title;

});

showOrderList(dataOrdersList.getOrders(), ulOrdersList);

showCategoryLists(data.lists, ulCategoryList);
