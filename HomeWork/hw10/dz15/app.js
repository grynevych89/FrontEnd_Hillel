'use strict';

const div = document.createElement('div');
const h1 = document.createElement('h1');
const table = document.createElement('table');

h1.innerHTML = 'Grynevych home works';
h1.className = 'title';
table.className = 'table100';
div.append(h1);
document.body.prepend(div);
div.append(table);

function TableCreate () {
    for (let i = 0; i < 10; i++) {
        let tableTrCreate = document.createElement('tr');

        for (let j = 1; j <= 10; j++) {
            let tableTdCreate = document.createElement('td');
            tableTdCreate.innerHTML = i * 10 + j;
            tableTrCreate.append(tableTdCreate);
        }
        table.append(tableTrCreate);
    }
}
TableCreate()
