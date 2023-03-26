function getLiCategoryItem({title, id}) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const buttonDelete = document.createElement('button');

    li.id = id;
    span.textContent = title;
    span.className = 'titleSpan menu-box-tab';
    buttonDelete.textContent = 'X';
    buttonDelete.className = 'btnDelete delete button'
    buttonDelete.type = 'button';

    li.append(span, buttonDelete);
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
    spanTitle.innerText = 'Назва: ' + title;
    spanTitle.className = 'titleSpan';
    pCount.textContent = 'Кількість: ' + count;
    pPrice.textContent = 'Ціна: ' + price;
    pDesc.textContent = 'Опис: ' + desc;

    buttonBuy.textContent = 'Buy';
    buttonBuy.className = 'btnBuy button'
    buttonBuy.id = 'buy'
    buttonBuy.type = 'button'
    buttonBuy.dataset.id = id

    buttonDelete.textContent = 'Delete';
    buttonDelete.className = 'btnDelete delete button'
    buttonDelete.type = 'button';

    li.append(spanTitle, pCount, pPrice, pDesc, buttonBuy, buttonDelete);

    return li;
}

function getLiOrdersList({date, price, id}) {
    const li = document.createElement('li');
    const spanInfo = document.createElement('span');

    const buttonDelete = document.createElement('button');
    li.id = id;
    spanInfo.className = 'titleSpan menu-box-tab';
    spanInfo.textContent =
        `Дата: ${date}
        Ціна: ${price}`;

    buttonDelete.textContent = 'X';
    buttonDelete.className = 'btnDelete'
    buttonDelete.type = 'button';
    li.append(spanInfo, buttonDelete);
    return li;
}

function getLiOrdersItems({productTitle, date, id, fio, city, adressNp, choosedPayment, count, price, desc}) {
    const li = document.createElement('li');
    const pProduct = document.createElement('p');
    const pDate = document.createElement('p');
    const pFio = document.createElement('p');
    const pCity = document.createElement('p');
    const pAdressNp = document.createElement('p');
    const pChoosedPayment = document.createElement('p');
    const pCount = document.createElement('p');
    const pPrice = document.createElement('p');
    const pDesc = document.createElement('p');
    const buttonDelete = document.createElement('button');

    li.id = id;
    pProduct.textContent = 'Продукт: ' + productTitle;
    pDate.textContent = 'Дата замовлення: ' + date;
    pFio.textContent = 'ПІБ: ' + fio;
    pCity.textContent = 'Місто: ' + city;
    pAdressNp.textContent = 'Адреса НП: ' + adressNp;
    pChoosedPayment.textContent = 'Спосіб оплати: ' + choosedPayment;
    pCount.textContent = 'Кількість: ' + count;
    pPrice.textContent = 'Ціна: ' + price;
    pDesc.textContent = 'Коментар до замовлення: ' + desc;

    buttonDelete.textContent = 'X';
    buttonDelete.className = 'btnDelete'
    buttonDelete.type = 'button';
    li.append(pProduct, pDate, pFio, pCity, pAdressNp, pChoosedPayment, pCount, pDesc, buttonDelete);
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

export function showOrdersItem(list, el) {
    const fragment = new DocumentFragment();

    list.forEach((items) => {
        fragment.append(getLiOrdersItems(items));
    });
    el.innerHTML = '';
    el.append(fragment);
}

export function toggleClasses(target, currentTarget, classes) {
    const arrClasses = classes.split(' ');

    currentTarget.childNodes.forEach((node) => {
        arrClasses.forEach((item) => node.firstChild.classList.remove(item));
    });

    arrClasses.forEach((item) => target.classList.add(item));
}
