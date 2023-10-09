/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    return document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2){
    return number1 - number2;
}
function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    return document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

function multiplyNumbers(){
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    return document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2)
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

function divideNumbers(){
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    return document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector("#year").innerHTML = currentYear;
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let sourceArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = sourceArray;
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = sourceArray.filter(number => number % 2 != 0);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = sourceArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = sourceArray.reduce((accumulator, currentValue) => accumulator + currentValue);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = sourceArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = sourceArray.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue);