function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b, operation) {
    switch (operation) {
        case add:
            return add(a, b);
            break;
        case subtract:
            return subtract(a, b);
            break;
        case multiply:
            return multiply(a, b);
            break;
        case divide:
            return divide(a, b);
            break;
        default:
            return `not a valid operation`;
    }
}

function addNumbertoDisplay(button) {
    const numbers = '0123456789.';
    if (numbers.includes(String(button.textContent))) {
        display.textContent += String(button.textContent);
    };
};

let num1;
let operator;
let num2;
const display = document.querySelector('.calculator-display');
const calculatorButtons = document.querySelectorAll('button');
calculatorButtons.forEach(button => button.addEventListener('click', () => {
    console.log(button.textContent);
    if ('0123456789.'.includes(String(button.textContent))) {
        display.textContent += String(button.textContent);
    };
}));
