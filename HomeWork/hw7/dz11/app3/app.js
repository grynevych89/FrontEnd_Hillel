// 3. Написати функцію яка приймає массив чисел та повертає максимальне число в цьому масиві.

const arrMaxNum = [1, 5, 22, 45, 76, 124]

function getMaxOfArray(val) {
  return Math.max.apply(null, val);
}

console.log(getMaxOfArray(arrMaxNum))
