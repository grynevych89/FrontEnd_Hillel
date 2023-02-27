// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr = [11, 'sdf', 42, 'lkowww', 22]

function getAverage (val){
  const averageCalc = val.reduce((acc,item) => acc+item);
  const averageInt = averageCalc / val.length;
  return averageInt;
}

function calculateAverageNumbers(id){
  const arrAverage = arr.filter(Number);
  return getAverage (arrAverage);
}

const averageResults = (
  ('\n Среднеарифметическое всех числовых значений масива: ') + calculateAverageNumbers(arr));

console.log(arr);
console.log(averageResults);
