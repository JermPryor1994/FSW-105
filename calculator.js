var readlineSync = require('readline-sync');

var firstNumber = readlineSync.questionInt("Please enter first number: ");
var secondNumber = readlineSync.questionInt("Please enter second number: ");
var operation = readlineSync.question("Please select operation (add/sub/mul/div): ");

function myAddition(a, b){
    return a + b;
}
function mySubtraction(a, b){
    return a - b;
}
function myMultiplication(a, b){
    return a * b;
}
function myDivision(a, b){
    return a / b;
}

function myCalculator(firstNumber, secondNumber, enterOperation){
    console.log("This is my custom calculator.");
    if (enterOperation == "add"){
        console.log("The result is: " + myAddition(firstNumber, secondNumber));
    }else if (enterOperation == "sub"){
        console.log("The result is: " + mySubtraction(firstNumber, secondNumber));
    }else if (enterOperation == "mul"){
        console.log("The result is: " + myMultiplication(firstNumber, secondNumber));
    }else if (enterOperation == "div"){
        console.log("The result is: " + myDivision(firstNumber, secondNumber));
    }else{
        console.log("Invalid operation. Please try another!");
    }
}

myCalculator(firstNumber, secondNumber, operation);
