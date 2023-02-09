let askHoues;

do {
    askHoues = prompt('Введите кол-во часов для перевода в секунды');
} while (isInvalid(askHoues));

askHoues = Number(askHoues);

function isInvalid(str) {
    return str === null || str.trim() === '' || isNaN(str);
}

const result = Number(askHoues) * 3600

alert(`
Вы ввели: ${askHoues}ч
Это: ${result} в секундах
`);
