function addToInput(number) {
    let input = document.getElementById('number1');
    input.value += number;
}

function cal() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let op = document.getElementById('op').value;
    let result;

    switch (op) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
            break;
    }

    let lblOutput = document.getElementById("output");
    lblOutput.textContent = "Result is : " + result;
}
