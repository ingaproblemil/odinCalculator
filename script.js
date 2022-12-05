//mattefunktionerna:

function add(a, b) {
    return a + b; 
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}


//Operate-funktion

function operate(a, b, c){

    if(c === 'add') {
        return add(a, b)
    } else if (c === 'subtract') {
        return subtract(a, b)
    } else if (c === 'divide') {
        return divide(a, b)
    } else if (c === 'multiply') {
        return multiply(a, b);
    }
}

console.log(operate(10,2,'multiply'))
console.log(operate(1,2,'add'))
console.log(operate(4, 5, 'subtract'))
console.log(operate(243, 5, 'divide'))

//knapparna

const buttons = document.getElementsByClassName('buttons');
const display = document.getElementById('display')
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const equalsBtn = document.getElementById('equalsBtn');
let num1 = 0;
let operator = 0;
let num2 = 0;
let displayArr = [];
let operatorArray = [];
let displayValue = displayArr.join('');

//clear button

clear.addEventListener('click', function () {
    displayArr = [];
    operatorArray = [];
    display.textContent = '';
    });

//backspace button



backspace.addEventListener('click', function () {
    displayArr.pop();
    display.textContent = displayArr.join('');
});

//number buttons

for (const button of buttons) {
    button.addEventListener('click', function () {
        
    displayArr.push(button.innerText);

    displayValue = displayArr.join('');

    display.textContent = displayValue;
    })};

//Operator buttons

addBtn.addEventListener('click', function () {
    let displayValue = displayArr.join('');
    let num1 = displayValue;
    let operator = 'add';
    operatorArray.push(num1, operator);
    display.textContent = ('+');
    displayArr = [];
    console.log(num1);
});

subtractBtn.addEventListener('click', function () {
    let displayValue = displayArr.join('');
    let num1 = displayValue;
    let operator = 'subtract';
    operatorArray.push(num1, operator);
    display.textContent = ('-');
    displayArr = [];
    console.log(num1);
});

multiplyBtn.addEventListener('click', function () {
    let displayValue = displayArr.join('');
    let num1 = displayValue;
    let operator = 'multiply';
    operatorArray.push(num1, operator);
    display.textContent = ('*');
    displayArr = [];
    console.log(num1);
});

divideBtn.addEventListener('click', function () {
    let displayValue = displayArr.join('');
    let num1 = displayValue;
    let operator = 'divide';
    operatorArray.push(num1, operator);
    display.textContent = ('÷');
    displayArr = [];
    console.log(num1);
});







//equalsbutton enligt samma princip som ovan!

equalsBtn.addEventListener('click', function () {
    let num2 = displayArr.join('');
    
    operatorArray.push(num2);

    console.log(operatorArray);
    let displaySum = operate((+operatorArray[0]), (+operatorArray[2]), operatorArray[1]);
    display.textContent = displaySum;
})
