const operators = ['+', '-', '*', '/'];

const promptForOperators = () => {
    let operator;
    do {
        operator = prompt('Enter operator either +, - , * or /');
    } while (!operators.includes(operator))
    return operator;
}

(function calculator() {
    const operator = promptForOperators();
    let number1;
    let number2;

    while (!number1 || isNaN(number1)) {
        number1 = parseFloat(prompt('Enter first number'));
    }
    while (!number2 || isNaN(number2)) {
        number2 = parseFloat(prompt('Enter second number'));
    }

    let result;

    // if ... else if
    // if (operator === '+') {
    //     result = number1 + number2;
    // } else if (operator === '-') {
    //     result = number1 - number2;
    // } else if (operator === '*') {
    //     result = number1 * number2
    // } else if (operator === '/') {
    //     if (number2 === 0) {
    //         alert('Nope ! No zero please')
    //         return;
    //     }
    //     result = number1 / number2;
    // } else {
    //     console.log('Invalid operator')
    //     return;
    // }

    switch (operator) {
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
            if (number2 === 0) {
                    alert('Nope ! No zero please')
                    return;
            }
            result = number1 / number2;
            break;
        default: 
            console.log('Invalid operator')
            return;
    }

    alert(`The result is ${result}`);

})()