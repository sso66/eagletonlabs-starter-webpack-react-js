// File: es6/functions/FunctionES6.js
// Date: 10/14/2020
console.log("\nThe Chronicles of JavaScript Functions")

console.log("\n1. Function that does not take a parameter and doesn't return anything.");
const sayHello = () => console.log("Hello World!");
let message = sayHello();
console.log("message: " + message);

console.log("\n2. Function that does take a parameter and doesn't return anything.");
const log = (message) => console.log(message);
log("Hello JavaScript!")

console.log("\n3. Function that does not take a parameter and does return a value.");
const flexbox = () =>
    console.log("___ No parameters passed but return Flexbox Module ___");
flexbox()

console.log("\n4. Function that does take a parameter and does return a value.");
const square = (number) => number * number;
console.log("square: " + square(2));

console.log("\n5. Function are first-class objects");
const cube = (number) => number * number * number;
console.log("cube: " + cube(3));

console.log(`6. A function can take more than one arguments (in fact, it can take 'n' parameter) `);
// ES5+ Old way
console.log("\n____ Function and the for Loop option ___");
// for-loop option
const sum = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
console.log("sum: " + sum(1,2));
console.log("sum: " + sum(1,2,3,4));
console.log("sum: " + sum(1,2,3,4,5));

console.log("\n6. What does ...args does?")
console.log("\nFunction and the es6 array extra method option.");
const total = (...args) => {
    let result = 0;
    result = args.reduce((current, prev) => current+ prev);
    return result;
}
console.log("total: " + total(1,2,3,4,5));

console.log("\n7. A function taking 'function' as parameter")
function dispatch(fn) {
    try {
        return fn("hello world!");
    } catch(e) { } // ignore the error
}

dispatch(function() {
    console.log("\n// do something here: normal function");
});

dispatch(() => console.log("\n// do something else: arrow function")); 
let result = dispatch(function(p1) {
    return `My message to ${p1}`;
});
console.log("___ IMPORTANT: The 'callback' function can also take a parameter and return value. ___")
console.log("result: " + result);

console.log("\n8. Practical applications of callback functions");
console.log("\n___ setTimeOut ___");
// setTimeout(function() {
//     console.log("Check the status of some server...");
// }, 1000)

console.log("\n___ setIntervar ___");
// setInterval(() => {
//     console.log("This will be executed every 5 seconds");
// })

console.log("\n9. A function can call itself (a.k.a recursion)");
function countDown(n) {
    console.log("n: " + n); 
    if (n > 1)  { // exit or terminal condition
        countDown(n-1);
    }
}
countDown(10);
// eof
