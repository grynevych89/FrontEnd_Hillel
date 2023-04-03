class Hamburger {
    constructor(size, stuffing){
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];
    }

    static SIZE_SMALL = {
        size: 'small',
        price: 100,
        calories: 10,
        name: 'Гамбургер Маленький'
    }

    static SIZE_BIG = {
        size: 'big',
        price: 150,
        calories: 20,
        name: 'Гамбургер Великий'
    }

    static STUFFING_CHEESE = {
        stuffing: 'cheese',
        price: 40,
        calories: 15,
        name: 'Сир'
    }

    static STUFFING_SALAD = {
        stuffing: 'salad',
        price: 20,
        calories: 5,
        name: 'Салат'
    }

    static TOPPING_MAYO = {
        topping: 'mayo',
        price: 10,
        calories: 35,
        name: 'Соус'
    }

    static TOPPING_SAUCE = {
        topping: 'sauce',
        price: 10,
        calories: 0,
        name: 'Спеції'
    }

    addTopping(topping, quantity) {
        for (let i = 0; i < quantity; i++) {
            this.topping.push(topping);
        }
    }

    calculateCalories() {
        return this.size.calories
            + this.stuffing.calories
            + this.topping.reduce((sum, curr) => {
                return sum + curr.calories;
            }, 0);
    }

    calculatePrice() {
        return this.size.price
            + this.stuffing.price
            + this.topping.reduce((sum, curr) => {
                return sum + curr.price;
            }, 0);
    }
}

// Замовлення:
console.log('________________________________________________');
console.log('Маленький гамбургер з начинкою з сиру та соусом');
console.log('________________________________________________');

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO, 1);

console.log(`Ваше замовлення:
${Hamburger.SIZE_SMALL.name}
Добавка: ${Hamburger.STUFFING_CHEESE.name}
Додатково: ${Hamburger.TOPPING_MAYO.name}
Усього ${hamburger.calculateCalories()} калорій
Ціна: ${hamburger.calculatePrice()} гривень`);
console.log('________________________________________________');

console.log('Додайте ще приправи');
console.log('________________________________________________');

hamburger.addTopping(Hamburger.TOPPING_SAUCE, 1);

console.log(`Ваше оновлене замовлення:
${Hamburger.SIZE_SMALL.name}
Добавка: ${Hamburger.STUFFING_CHEESE.name},
Додатково: ${Hamburger.TOPPING_MAYO.name}, ${Hamburger.TOPPING_SAUCE.name}
Усього ${hamburger.calculateCalories()} калорій
Ціна: ${hamburger.calculatePrice()} гривень`);
