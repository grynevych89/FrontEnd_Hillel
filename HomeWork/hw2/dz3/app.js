let numberOne, numberTwo, chooseOperand, result;

do {
    numberOne = prompt('Введите первое число');
} while (isInvalid(numberOne));

numberOne = Number(numberOne);

do {
    chooseOperand = prompt('Введите действие: +, -, * или /');
} while (isNotMathSymbol(chooseOperand));

do {
    numberTwo = prompt('Введите второе число');
} while (isInvalid(numberTwo));

numberTwo = Number(numberTwo);

switch (chooseOperand) {
    case '+' : result = numberOne + numberTwo; break;
    case '-' : result = numberOne - numberTwo; break;
    case '*' : result = numberOne * numberTwo; break;
    case '/' : result = numberOne / numberTwo; break;
}

alert(numberOne + ' ' + chooseOperand + ' ' + numberTwo + ' = ' + result);

function isInvalid(str) {
    return str === null || str.trim() === '' || isNaN(str);
}

// function isNotMathSymbol(str) {
//     switch(str) {
//         case '+': return false;
//         case '-': return false;
//         case '*': return false;
//         case '/': return false;
//         default: return true;
//     }
// }

function isNotMathSymbol(str) {
    return !['+', '-', '*', '/'].includes(str);
}
