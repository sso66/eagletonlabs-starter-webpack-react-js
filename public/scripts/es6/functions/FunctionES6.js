// File: es6/functions/FunctionES6.js
// Date: 10/14/2020
console.log("The Chronicles of JavaScript Functions")

console.log("\n1. Function that does not take a parameter and doesn't return anything.");
const sayHello = () => console.log("Hello World!");
let message = sayHello();

console.log("message: " + message);

console.log("\n2. Function that does take a parameter and doesn't return anything.");
const log = (message) => console.log(message);
log("Hello JavaScript!")

console.log("\n3. Function that does not take a parameter and does return a value.");
const flexbox = () =>
    console.log("No parameters passed but return Flexbox Module");
flexbox()

console.log("\n4. Function that does take a parameter and does return a value.");
const square = (number) => number * number;
console.log("square: " + square(2));

console.log("\nFunction are first-class objects");
const cube = (number) => number * number * number;
console.log("cube: " + cube(3));

console.log("\nFunction and the for Loop option.");
// for-loop option
const sum = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
console.log(sum(1,2,3,4,5));
// es6 array extra method option

console.log("\nFunction and the es6 array extra method option.");
const total = (...args) => {
    let result = 0;
    result = args.reduce((current, prev) => current+ prev);
    return result;
}
console.log(total(1,2,3,4,5));

console.log("\nA function taking 'function' as parameter")
function dispatch(fn) {
    try {
        return fn("hello world!");
    } catch(e) { } // ignore the error
}

dispatch(function() {
    console.log("// do something here: normal function");
});

dispatch(() => console.log("// do something else: arrow function")); 

let result = dispatch(function(p1) {
    return `My message to ${p1}`;
});
console.log("IMPORTANT: The 'callback' function can also take a parameter and return value.")
console.log("result: " + result);

console.log("\nPractical application of callback functions");


// eof
