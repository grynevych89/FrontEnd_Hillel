export function isValid() {
    document.AddNewOrder.addEventListener('submit', function (event) {
        console.log(this.elements);
        console.log([...this.elements]);

        event.preventDefault();

        [...this.elements]
            .filter(element => element.type !== 'submit')
            .forEach(validateElement)
    })

    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateElement(this)
        });
    })
}

function validateElement(element) {
    const errorElement = element.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
        return;
    }

    if (element.hasAttribute('required') && element.value.trim() === '') {
        errorElement.innerHTML = '<br> Не може бути пустим..';
    } else if (element.type === 'text'
        && element.name === 'fioNewOrder'
        && /[^А-Яа-яЁё ]/g
        .test(element.value)) {
        errorElement.innerHTML = 'Введіть ПІБ правильно..';
    } else if (element.type === 'email' && !/^\S+@\S+\.\S+$/
        .test(element.value)) {
        errorElement.innerHTML = 'Введіть Email правильно..';
    } else if (element.type === 'tel' && /^(\+38)?0[0-9]{9}$/
        .test(element.value)) {
        errorElement.innerHTML = 'Введіть номер правильно..';
    } else {
        errorElement.innerHTML = '';
    }
}
