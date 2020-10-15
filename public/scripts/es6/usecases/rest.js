// File: es6/usecases/spread.js
// Date: 10/15/2020

// ES5+ "reduce"
const { func, number } = require("prop-types");

function addSimple(a, b) {
    return a + b;
}

function add(...numbers) {
    return numbers[0] + numbers[1]
}

console.log(addSimple(3, 2));
console.log(add(3, 2));

// ES6+ Array.reduce

const addES6 = (...numbers) => numbers.reduce((prev, current) => prev + current);

console.log("return: " + addES6(1, 2, 3, 4));