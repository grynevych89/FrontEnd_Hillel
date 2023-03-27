window.addEventListener('load', init);
function init() {
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
        input.addEventListener('blur', function (){
            validateElement(this)
        });
    })

    function validateElement(element) {
        const errorElement = element.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            return;
        }

        if (element.hasAttribute('required') && element.value.trim() === '') {
            errorElement.innerHTML = 'This field cannot be empty';
        } else if(element.type === 'email' && !/^\S+@\S+\.\S+$/.test(element.value)) {
            errorElement.innerHTML = 'Please enter valid email';
        } else {
            errorElement.innerHTML = '';
        }
    }
}
