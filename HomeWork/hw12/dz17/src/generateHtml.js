function getLiCategoryItem({title, id}) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const buttonDelete = document.createElement('button');

    li.id = id;
    span.textContent = title;
    span.className = 'titleSpan';
    buttonDelete.textContent = 'X';
    buttonDelete.className = 'btnDelete'
    buttonDelete.type = 'button';

    li.append(span);
    li.append(buttonDelete)

    return li;
}

function getLiProductItem({title, id, count, price, desc}) {
    const li = document.createElement('li');
    const spanTitle = document.createElement('span');
    const pCount = document.createElement('p');
    const pPrice = document.createElement('p');
    const pDesc = document.createElement('p');
    const buttonDelete = document.createElement('button');
    const buttonBuy = document.createElement('button');

    li.id = id;
    spanTitle.innerText = 'Название: ' + title;
    spanTitle.className = 'titleSpan';
    pCount.textContent = 'Кол-во: ' + count;
    pPrice.textContent = 'Цена: ' + price;
    pDesc.textContent = 'Описание: ' + desc;

    buttonDelete.textContent = 'Delete';
    buttonDelete.className = 'btnDelete'
    buttonDelete.type = 'button';

    buttonBuy.textContent = 'Buy';
    buttonBuy.className = 'btnBuy'
    buttonBuy.id = 'buy'
    buttonBuy.type = 'button'
    buttonBuy.dataset.id = id

    li.append(spanTitle, pCount, pPrice, pDesc, buttonDelete, buttonBuy);

    return li;
}

function getLiOrdersList({productTitle, id, fio, city, adressNp, choosedPayment, count, desc}) {
    const li = document.createElement('li');
    const pProduct = document.createElement('p');
    const pFio = document.createElement('p');
    const pCity = document.createElement('p');
    const pAdressNp = document.createElement('p');
    const pChoosedPayment = document.createElement('p');
    const pCount = document.createElement('p');
    const pDesc = document.createElement('p');
    const buttonDelete = document.createElement('button');
    li.id = id;
    pProduct.textContent = 'Продукт: ' + productTitle;
    pFio.textContent = 'ФИО: ' + fio;
    pCity.textContent = 'Город: ' + city;
    pAdressNp.textContent = 'Адресс НП: ' + adressNp;
    pChoosedPayment.textContent = 'Метод оплаты: ' + choosedPayment;
    pCount.textContent = 'Кол-во: ' + count;
    pDesc.textContent = 'Коментарий к заказу: ' + desc;
    buttonDelete.textContent = 'X';
    buttonDelete.className = 'btnDelete'
    buttonDelete.type = 'button';
    li.append(pProduct, pFio, pCity, pAdressNp, pChoosedPayment, pCount, pDesc, buttonDelete);
    return li;
}

export function showCategoryLists(list, el) {
    const fragment = new DocumentFragment();

    list.forEach((item) => {
        fragment.append(getLiCategoryItem(item));
    });

    el.innerHTML = "";
    el.append(fragment);
}

export function showProductList(list, el) {
    const fragment = new DocumentFragment();

    list.forEach((items) => {
        fragment.append(getLiProductItem(items));
    });
    el.innerHTML = '';
    el.append(fragment);
}

export function showOrderList(list, el) {
    const fragment = new DocumentFragment();

    list.forEach((item) => {
        fragment.append(getLiOrdersList(item));
    });

    el.innerHTML = "";
    el.append(fragment);
}

export function toggleClasses(target, currentTarget, classes) {
    const arrClasses = classes.split(' ');

    currentTarget.childNodes.forEach((node) => {
        arrClasses.forEach((item) => node.firstChild.classList.remove(item));
    });

    arrClasses.forEach((item) => target.classList.add(item));
}
