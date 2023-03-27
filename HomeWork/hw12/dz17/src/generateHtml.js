function getLiCategoryItem({title, id}) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const buttonDelete = document.createElement('button');

    li.id = id;
    span.textContent = title;
    span.className = 'titleSpan menu-box-tab';
    buttonDelete.textContent = 'X';
    buttonDelete.className = 'btnDelete1 delete button'
    buttonDelete.type = 'button';

    li.append(span, buttonDelete);
    return li;
}

function getLiProductItem({title, id, count, price, desc}) {
    const li = document.createElement('li');
    const spanTitle = document.createElement('span');
    const buttonDelete = document.createElement('button');
    const buttonBuy = document.createElement('button');

    li.id = id;
    spanTitle.innerText = `Назва: ${title}
    Кількість: ${count}
    Ціна: ${price}
    Опис: ${desc}`;
    spanTitle.className = 'titleSpan';

    buttonBuy.textContent = 'Buy';
    buttonBuy.className = 'btnBuy button'
    buttonBuy.id = 'buy'
    buttonBuy.type = 'button'
    buttonBuy.dataset.id = id

    buttonDelete.textContent = 'Delete';
    buttonDelete.className = 'btnDelete2'
    buttonDelete.type = 'button';

    li.append(spanTitle, buttonBuy, buttonDelete);

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
    buttonDelete.className = 'btnDelete1 delete button'
    buttonDelete.type = 'button';
    li.append(spanInfo, buttonDelete);
    return li;
}

function getLiOrdersItems({productTitle, date, id, fio, city, adressNp, choosedPayment, count, price, desc}) {
    const li = document.createElement('li');
    const spanProduct = document.createElement('span');

    li.id = id;
    spanProduct.className = 'titleSpan'
    spanProduct.innerText = `Продукт: ${productTitle}
    Дата замовлення: ${date}
    ПІБ: ${fio}
    Місто: ${city}
    Адреса НП: ${adressNp}
    Спосіб оплати: ${choosedPayment}
    Кількість: ${count}
    Ціна: ${price}
    Коментар до замовлення: ${desc}`

    li.append(spanProduct);
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

export function showOrdersItem(item, el) {
    el.innerHTML = '';
    el.append(getLiOrdersItems(item));
}

export function toggleClasses(target, currentTarget, classes) {
    const arrClasses = classes.split(' ');

    currentTarget.childNodes.forEach((node) => {
        arrClasses.forEach((item) => node.firstChild.classList.remove(item));
    });

    arrClasses.forEach((item) => target.classList.add(item));
}
