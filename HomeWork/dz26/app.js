function* Foo() {
    console.log('start')
    yield 1
    yield 2
    yield 3
    console.log('finish')
}

function Boo(){
    console.log('start');
    return {
        from: 1,
        to: 3,

        [Symbol.iterator]() {
            return this;
        },

        next() {

            if (this.current === undefined) {
                this.current = this.from;
            }

            if (this.current <= this.to) {
                return {
                    value: this.current++,
                    done: false
                };
            } else {
                if (this.current === 4) {
                    console.log('finish');
                    this.current++;
                }

                return {
                    value: undefined,
                    done: true
                };
            }
        }
    };
}

// Перевірка:
console.log('Функція Foo()');
const iterator = Foo();
console.log(`iterator.next().value // ${iterator.next().value}`);
console.log(`iterator.next().done // ${iterator.next().done}`);
console.log(`iterator.next().value // ${iterator.next().value}`);
console.log(`iterator.next().value // ${iterator.next().value}`);
console.log(`iterator.next().done // ${iterator.next().done}`);

console.log('');

console.log('Функція Boo()');
const iterator2 = Boo();
console.log(`iterator2.next().value // ${iterator2.next().value}`);
console.log(`iterator2.next().done // ${iterator2.next().done}`);
console.log(`iterator2.next().value // ${iterator2.next().value}`);
console.log(`iterator2.next().value // ${iterator2.next().value}`);
console.log(`iterator2.next().done // ${iterator2.next().done}`);
