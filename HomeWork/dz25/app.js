'use strict';

import {
    input,
    clearBtn,
    delBtn,
    equalBtn,
    numBtns,
    opBtns,
    clearInput,
    deleteChar,
    addNumber,
    addOperator,
    calculateResult,
} from "./calculator.js";

clearBtn.addEventListener("click", clearInput);
delBtn.addEventListener("click", deleteChar);
equalBtn.addEventListener("click", calculateResult);

numBtns.forEach((btn) => {
    btn.addEventListener("click", addNumber);
});

opBtns.forEach((btn) => {
    btn.addEventListener("click", addOperator);
});
