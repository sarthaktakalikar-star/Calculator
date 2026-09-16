const display = document.getElementById("display");
const history = document.getElementById("history");
const buttons = document.querySelector(".buttons");

let expression = "";
let justCalculated = false;

function render() {
  display.textContent = expression || "0";
}

function clearDisplay() {
  expression = "";
  history.textContent = "0";
  justCalculated = false;
  render();
}

function deleteLast() {
  if (!expression) return;
  expression = expression.slice(0, -1);
  justCalculated = false;
  render();
}

function appendValue(value) {
  if (justCalculated) {
    expression = "";
    history.textContent = "0";
    justCalculated = false;
  }

  if (value === "%") {
    if (!expression) return;
    const last = expression.slice(-1);
    if (/[+\-*/%]/.test(last)) {
      expression = expression.slice(0, -1) + "%";
      render();
      return;
    }
  }

  expression += value;
  render();
}

function addDecimal() {
  if (justCalculated) {
    expression = "";
    history.textContent = "0";
    justCalculated = false;
  }

  const currentNumber = expression.split(/[+\-*/%]/).pop();
  if (!currentNumber.includes(".")) {
    expression += currentNumber ? "." : "0.";
    render();
  }
}

function addOperator(operator) {
  if (!expression) return;

  const last = expression.slice(-1);
  if (/[+\-*/%]/.test(last)) {
    expression = expression.slice(0, -1) + operator;
  } else {
    expression += operator;
  }

  justCalculated = false;
  render();
}

function calculate() {
  if (!expression || /[+\-*/%]$/.test(expression)) return;

  try {
    const result = Function(`"use strict"; return (${expression})`)();
    if (!Number.isFinite(result)) throw new Error("Invalid result");

    history.textContent = `${expression} =`;
    expression = String(Number(result.toFixed(10)));
    justCalculated = true;
    render();
  } catch {
    history.textContent = "Invalid calculation";
    expression = "";
    justCalculated = false;
    render();
  }
}

buttons.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const { action, value } = button.dataset;

  if (action === "clear") clearDisplay();
  if (action === "delete") deleteLast();
  if (action === "number") appendValue(value);
  if (action === "decimal") addDecimal();
  if (action === "operator") addOperator(value);
  if (action === "equals") calculate();
});

document.addEventListener("keydown", (event) => {
  const { key } = event;

  if (/\d/.test(key)) appendValue(key);
  else if (key === ".") addDecimal();
  else if (["+", "-", "*", "/", "%"].includes(key)) addOperator(key);
  else if (key === "Enter" || key === "=") calculate();
  else if (key === "Escape" || key.toLowerCase() === "c") clearDisplay();
  else if (key === "Backspace") deleteLast();
  else return;

  event.preventDefault();
});

render();
