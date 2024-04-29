let output = document.getElementById("output");
let currentInput = "";

function appendNumber(number) {
    currentInput += number;
    output.value = currentInput;
}

function appendOperator(operator) {
    currentInput += operator;
    output.value = currentInput;
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        output.value = currentInput;
    }
}

function clearOutput() {
    currentInput = "";
    output.value = "";
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    output.value = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        output.value = result;
        currentInput = result.toString();
    } catch (error) {
        output.value = "Error";
    }
}
