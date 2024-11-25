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
    if (b === '') {
        operation = 'none';
    };

    switch (operation) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case '÷':
            return divide(a, b);
            break;
        case 'none':
            return a;
            break;
        default:
            return `not a valid operation`;
    }
}

let calculator = {
    num1: 0,
    num2: '',
    operator: 'none',
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
                calculator[calculator['currentOperand']] = Number(display.textContent);
            }
        } else {
            display.textContent += String(button.textContent);
            calculator[calculator['currentOperand']] = Number(display.textContent);
        }
    } else if ('+-x÷'.includes(String(button.textContent))) {
        calculator[calculator['currentOperand']] = Number(display.textContent);
        if (calculator['currentOperand'] === 'num1') {
            calculator['currentOperand'] = 'num2';
            display.textContent = '';
        } else {
            alert(`Hey, only two numbers can be used!`);
        }

        if (calculator['operator'] === 'none') {
            calculator['operator'] = button.textContent;
        }      
        
    } else if (String(button.textContent) === '=') {
        display.textContent = operate(calculator['num1'], calculator['num2'], calculator['operator']);
        calculator['num1'] = operate(calculator['num1'], calculator['num2'], calculator['operator']);
        calculator['num2'] = '';
        calculator['operator'] = 'none';
        calculator['currentOperand'] = 'num1';
    } else if (String(button.textContent) === 'AC') {
        display.textContent = '';
        calculator['num1'] = 0;
        calculator['num2'] = '';
        calculator['operator'] = 'none';
        calculator['currentOperand'] = 'num1';
    }
    console.table(calculator);
}));
