export const input = document.querySelector("#inputxt");
export const clearBtn = document.querySelector("#clear");
export const delBtn = document.querySelector("#del");
export const equalBtn = document.querySelector("#equal");
export const numBtns = document.querySelectorAll(".btn-nmbr");
export const opBtns = document.querySelectorAll(".dig-btn");

export function clearInput() {
    input.value = "";
}

export function deleteChar() {
    input.value = input.value.slice(0, -1);
}

export function addNumber(e) {
    const num = e.target.textContent;
    input.value += num;
}

export function addOperator(e) {
    const op = e.target.textContent;
    input.value += op;
}

export function calculateResult() {
    const expression = input.value;
    const result = eval(expression);
    input.value = result;
}
