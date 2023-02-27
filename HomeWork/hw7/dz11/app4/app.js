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
