let arrayLength;
let arr = [];
let arrStr = [];
let arrNum = [];

arrayLength = +prompt('Введите длинну масива:');

for (let i = 0; i < arrayLength; i++) {
    let askElem;
    askElem = prompt(`Введите ${i+1}-й элемент масива:`);
    if (askElem === null) {
        console.log(`Введите правильно данные!`);
        break;
    } else if (isNaN(+askElem)) {
        arr.push(askElem);
        arrStr.push(askElem);
    } else {
        arr.push(+askElem);
        arrNum.push(+askElem)
    }
    console.log(arr);
}

arrNum.sort((a, b) => a - b);
arrStr.sort( (a, b) => a.localeCompare(b));

arr = arrNum.concat(arrStr);
console.log(arr);

arr.splice(1, 3);
console.log(arr);
