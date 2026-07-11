const display = document.querySelector("#display");
const numbersBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");
const calculateBtn = document.querySelector(".calculate");
    
let firstNumber = "";
let secondNumber = "";
let symbol = "";
let resetDisplay = false;

clearBtn.addEventListener("click", () => {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    symbol = "";
    resetDisplay = false;
});

operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
        if (symbol === "") {
            firstNumber = display.value;
            symbol = button.textContent;
            resetDisplay = true;
        } else if (resetDisplay){
            symbol = button.textContent;
        } else {
            secondNumber = display.value;
            firstNumber = operate(firstNumber, symbol, secondNumber);
            display.value = firstNumber;
            symbol = button.textContent;
            resetDisplay = true;
        }
    });
});

numbersBtn.forEach((button) => {
    button.addEventListener("click", () => {
        if (resetDisplay) {
    display.value = "";
    resetDisplay = false;
    }
    display.value += button.textContent;
    });
});

calculateBtn.addEventListener("click", () => {
    secondNumber = display.value;
    display.value = operate(firstNumber, symbol, secondNumber);;
    firstNumber = display.value;
    secondNumber = "";
    symbol = ""
    resetDisplay = true;
});

function operate(firstNumber, symbol, secondNumber) {
    if (symbol === "+") {
        return parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (symbol === "-") {
        return parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (symbol === "*") {
        return parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (symbol === "/" && parseFloat(secondNumber) === 0) {
        return display.value = "Nice Try!"
    } else if (symbol === "/") {
        return parseFloat(firstNumber) / parseFloat(secondNumber);
    }
    return display.value
};