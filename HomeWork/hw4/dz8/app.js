// Задание №1
// console.log('Задание №1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)')

// for (let i = 20; i <= 30; i += 0.5) {
//     console.log(i)
//   }
  

// Задание №2
// console.log('Задание №2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.')

// for (let i = 10; i <= 100; i += 10) {
//     result = `Вартість ${i}$ складає ${i * 27} грн`
//     console.log(result)
//   }


// Задание №3
// console.log('Задание №3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.')

// let n = 70;
// for (let i = 0; i*i <= n; i++) {
//     console.log(i)
// }

// Задание №4
console.log("Задание №4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).")

let y = 100;
for (let i = 2; i <= y; i++) {
    let f = 1;
    if (i > 2 && i % 2 != 0)
    {
        for (let j = 3; j * j <= i ; j = j + 2)
        {
            if (i % j == 0)
            {
                f = 0;
                break;
            }
        }
    }
    else if (i != 2) f = 0;
    if (f == 1) {console.log(i);
    } 
}


// Задание №5
// console.log('Задание №5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).')

// let c = 34;
// if (c % 3 === 0 && c) {
//    console.log(`Число ${c} делится на 3`) 
// } else {
//     console.log(`Число ${c} не делится на 3`)
// }
