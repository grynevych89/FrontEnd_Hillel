let numberOne, numberTwo, numberThree;

do {
    numberOne = prompt('Введите первое число');
} while (isInvalid(numberOne));

numberOne = Number(numberOne);


do {
    numberTwo = prompt('Введите второе число');
} while (isInvalid(numberTwo));

numberTwo = Number(numberTwo);


do {
    numberThree = prompt('Введите третье число');
} while (isInvalid(numberThree));

numberThree = Number(numberThree);


function isInvalid(str) {
    return str === null || str.trim() === '' || isNaN(str);
}

const result = (Number(numberOne) + Number(numberTwo) + Number(numberThree)) / 3



alert(`
Введенные Вами числа: ${numberOne} + ${numberTwo} + ${numberThree}
Среднее арифметическое: ${result}
`);
