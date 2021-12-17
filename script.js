var num1 = "";
var num2 = "";
var currOperator = "";
var result = "";
var displayText = "";

const btnNumbers = document.querySelectorAll(".btn-number");
const btnOperators = document.querySelectorAll(".btn-operator");
const btnEqual = document.querySelector(".btn-equal");
const btnClear = document.querySelector(".btn-clear");
const display = document.querySelector(".display-text");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '×':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
  }
}

function clear() {
  num1 = "";
  num2 = "";
  currOperator = "";
  result = "";
  displayText = "";
  display.textContent = "";
}

function updateDisplay(n = "") {
  displayText += n;
  if (result.length == 0) {
    display.textContent = displayText;
  }
  else {
    display.textContent = result;
  }
}

function setOperater(operator) {
  if (displayText !== "") {
    num1 = displayText;
  }
  if (result !== "") {
    num1 = result;
    displayText = num1;
    result = "";
    num2 = "";
  }
  currOperator = operator;
  updateDisplay(currOperator);
}

function equal() {
  if (currOperator !== "") {
    num2 = displayText.slice(num1.length + 1);
  }
  result = operate(currOperator, num1, num2);
  console.log(result);
  updateDisplay();
}

btnNumbers.forEach((button) => 
  button.addEventListener('click', () => 
    updateDisplay(button.innerText)
    )
  )

btnOperators.forEach((button) =>
  button.addEventListener('click', () =>
  setOperater(button.innerText))
  )

btnEqual.addEventListener('click', equal);
btnClear.addEventListener('click', clear);