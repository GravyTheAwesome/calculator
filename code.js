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

let calculator = {
    num1: '',
    num2: '',
    operator: '',
    currentOperand: 'num1',
}

const display = document.querySelector('.calculator-display');
const calculatorButtons = document.querySelectorAll('button');
calculatorButtons.forEach(button => button.addEventListener('click', () => {
    console.log(button.textContent);
    if ('0123456789.'.includes(String(button.textContent))) {
        if (String(button.textContent) === '.') {
            if ((display.textContent.split(".").length - 1) < 1) {
                display.textContent += String(button.textContent);
            }
        } else {
            display.textContent += String(button.textContent);
        }
    } else if ('+-x÷'.includes(String(button.textContent))) {
        calculator[calculator['currentOperand']] = Number(display.textContent);
        if (calculator['currentOperand'] === 'num1') {
            calculator['currentOperand'] = 'num2';
            display.textContent = '';
        } else {
            alert(`Hey, only two numbers can be used!`);
        }

        if (calculator['operator'] === '') {
            calculator['operator'] = button.textContent;
        }  
        
        console.table(calculator);
    };
}));
