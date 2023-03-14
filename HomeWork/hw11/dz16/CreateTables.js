'use strict';

const divRow = document.createElement('div');

const divLeft = document.createElement('div');
const divCenter = document.createElement('div');
const divRight = document.createElement('div');

const divLeft_h2 = document.createElement('h2');
const divCenter_h2 = document.createElement('h2');
const divRight_h2 = document.createElement('h2');


divRow.className = 'row'
divLeft.className = 'col left-col'
divCenter.className = 'col center-col'
divRight.className = 'col right-col'
divLeft_h2.className = 'col-name'
divCenter_h2.className = 'col-name'
divRight_h2.className = 'col-name'

document.body.prepend(divRow);
divRow.append(divLeft);
divRow.append(divCenter);
divRow.append(divRight);

divLeft_h2.innerText = 'Категории'
divLeft.append(divLeft_h2)

divCenter_h2.innerText = 'Список товаров из категории'
divCenter.append(divCenter_h2)

divRight_h2.innerText = 'Товары'
divRight.append(divRight_h2)
