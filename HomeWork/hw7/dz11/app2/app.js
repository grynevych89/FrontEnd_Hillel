// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const action = getAction();
const operands = getOperands();
const result = calculate(operands, action);
alert(`
    Введены числа: ${operands}
    Введено действие: ${action}
    Результат действия ${action}: ${result}`
);

function getAction() {
    let val;

    do {
        val = prompt('Введите действие: +, -, *, /, %, ^');
    } while (isActionInvalid(val));

    return val;
}

function isActionInvalid(val) {
    return val !== '+' && val !== '-' && val !== '*' && val !== '/' && val !== '%' && val !== '^';
}

function getOperands() {
    let operands = [];

    do {
        operands = prompt('Введите числа через запятую: ' );
    } while (isOperandInvalid(operands));
    return operands.split(',').map(Number);
}

function isOperandInvalid(val) {
    return val === null || val.trim() === '';
}

function calculate(values, operation) {
    const result = values.reduce(function (acc, item) {
        return calculateResult(acc, item, operation);
    });
    return result;
}

function calculateResult(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        case '^':
            return a ** b;
    }
}

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
