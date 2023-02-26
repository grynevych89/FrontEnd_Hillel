// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
// const arr = [11, 'sdf', 42, 'lkowww', 22]

// function getAverage (val){
//   const averageCalc = val.reduce((acc,item) => acc+item);
//   const averageInt = averageCalc / val.length;
//   return averageInt;
// }

// function calculateAverageNumbers(id){
//   const arrAverage = arr.filter(Number);
//   return getAverage (arrAverage);
// }

// const averageResults = (
//   ('\n Среднеарифметическое всех числовых значений масива: ') + calculateAverageNumbers(arr));

// console.log(arr);
// console.log(averageResults);




// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// let numberOne, numberTwo, chooseOperand, result;

// do {
//     numberOne = prompt('Введите первое число');
// } while (isInvalid(numberOne));

// numberOne = Number(numberOne);

// do {
//     chooseOperand = prompt('Введите действие: +, -, *, /, %, ^');
// } while (isNotSymvol(chooseOperand));

// do {
//     numberTwo = prompt('Введите второе число');
// } while (isInvalid(numberTwo));

// numberTwo = Number(numberTwo);

// switch (chooseOperand) {
//     case '+' : result = numberOne + numberTwo; break;
//     case '-' : result = numberOne - numberTwo; break;
//     case '*' : result = numberOne * numberTwo; break;
//     case '/' : result = numberOne / numberTwo; break;
//     case '%' : result = numberOne % numberTwo; break;
//     case '^' : result = numberOne ** numberTwo; break;
// }

// alert(numberOne + ' ' + chooseOperand + ' ' + numberTwo + ' = ' + result);

// function isInvalid(str) {
//     return str === null || str.trim() === '' || isNaN(str);
// }

// function isNotSymvol(str) {
//   return !(['+', '-', '*', '/', '^', '%'].includes(str));
// }




// 3. Написати функцію яка приймає массив чисел та повертає максимальне число в цьому масиві.
// console.log('Написати функцію яка приймає массив чисел та повертає максимальне число в цьому масиві.')
// const arrMaxNum = [1, 5, 22, 45, 76, 124]

// function getMaxOfArray(val) {
//   return Math.max.apply(null, val);
// }

// console.log(getMaxOfArray(arrMaxNum))



// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

let askStr, askSymbolToDelete, strFromUserByLowerCase, symbolsToReplace = '';

do {
    askStr = prompt('Введите текст из которого нужно будет удалить символы:');
} while (isInvalid(askStr));

do {
    askSymbolToDelete = prompt('Введите через запятую символы, которые нужно удалить:');
} while (isInvalid(askSymbolToDelete));

if (askStr !== null) strFromUserByLowerCase = askStr.toLowerCase();
if (askSymbolToDelete !== null) symbolsToReplace = askSymbolToDelete.toLowerCase().split(',');

console.log('Вы ввели: ' + askStr)
console.log(String('Вы ввели на удаление эти символы : ' + symbolsToReplace))

if (typeof askStr === typeof askSymbolToDelete) {
    console.log(replaceSymbol(strFromUserByLowerCase, symbolsToReplace));
}

function replaceSymbol(valueToChange, symbols) {
    symbols.forEach((item) => valueToChange = valueToChange.replaceAll(`${item}`, ''));
    return valueToChange;
}

function isInvalid(str) {
    return str === null || str.trim() === '';
}
