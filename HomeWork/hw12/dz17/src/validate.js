function init() {
    document.AddNewOrder.addEventListener('submit', function (event) {
        console.log(this.elements);
        console.log([...this.elements]);

        event.preventDefault();

        [...this.elements]
            .filter(element => element.type !== 'submit')
            .forEach(isValid)
    })

    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            isValid(this)
        });
    })
}

export function isValid(element) {
    const errorElement = element.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
        return;
    }

    if (element.hasAttribute('required') && element.value.trim() === '') {
        errorElement.innerHTML = 'Це поле не може бути пустим..';
    } else if (element.type === 'email' && !/^\S+@\S+\.\S+$/.test(element.value)) {
        errorElement.innerHTML = 'Please enter valid email';
    } else {
        errorElement.innerHTML = '';
    }
}
