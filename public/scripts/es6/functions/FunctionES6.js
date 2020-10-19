// File: es6/functions/FunctionES6.js

const { func } = require("prop-types");

// Date: 10/14/2020
console.log("\nThe Chronicles of JavaScript Functions")

// console.log("\n1. Function that does not take a parameter and doesn't return anything.");
// const sayHello = () => console.log("Hello World!");
// let message = sayHello();
// console.log("message: " + message);

// const sayHelloBlock = () => { return "Block Hello World? w/explicit return statement" };
// let messageBlock = sayHelloBlock();
// console.log("messageBlock: " + messageBlock);
 
// console.log("\n2. Function that does take a parameter and doesn't return anything.");
// const log = (message) => console.log(message);
// log("Hello JavaScript!")

// console.log("\n3. Function that does not take a parameter and does return a value.");
// const flexbox = () =>
//     console.log("___ No parameters passed but return Flexbox Module ___");
// flexbox()

// console.log("\n4. Function that does take a parameter and does return a value.");
// const square = (number) => number * number;
// console.log("square: " + square(2));

// console.log("\n5. Function are first-class objects");
// const cube = (number) => number * number * number;
// console.log("cube: " + cube(3));

// console.log(`6. A function can take more than one arguments (in fact, it can take 'n' parameter) `);
// // ES5+ Old way
// console.log("\n____ Function and the for Loop option ___");
// // for-loop option
// const sum = (...args) => {
//     let result = 0;
//     for (let i = 0; i < args.length; i++) {
//         result += args[i];
//     }
//     return result;
// }
// console.log("sum: " + sum(1,2));
// console.log("sum: " + sum(1,2,3,4));
// console.log("sum: " + sum(1,2,3,4,5));

// console.log("\n6. What does ...args does?")
// console.log("\nFunction and the es6 array extra method option.");
// const total = (...args) => {
//     let result = 0;
//     result = args.reduce((current, prev) => current+ prev);
//     return result;
// }
// console.log("total: " + total(1,2,3,4,5));

// console.log("\n7. A function taking 'function' as parameter")
// function dispatch(fn) {
//     try {
//         return fn("hello world!");
//     } catch(e) { } // ignore the error
// }

// dispatch(function() {
//     console.log("\n// do something here: normal function");
// });

// dispatch(() => console.log("\n// do something else: arrow function")); 
// let result = dispatch(function(p1) {
//     return `My message to ${p1}`;
// });
// console.log("___ IMPORTANT: The 'callback' function can also take a parameter and return value. ___")
// console.log("result: " + result);

// console.log("\n8. Practical applications of callback functions");
// console.log("\n___ setTimeOut ___");
// // setTimeout(function() {
// //     console.log("Check the status of some server...");
// // }, 1000)

// console.log("\n___ setIntervar ___");
// // setInterval(() => {
// //     console.log("This will be executed every 5 seconds");
// // })

// console.log("\n9. A function can call itself (a.k.a recursion)");
// function countDown(n) {
//     console.log("n: " + n); 
//     if (n > 1)  { // exit or terminal condition
//         countDown(n-1);
//     }
// }
// countDown(10);

console.log("\n10. Immediately Invoked Function Expression (a.k.a IIFE)");

(function() {
    let message = "I don't have a name!";
    console.log("\nAnonymous function: " +message);
    console.log("\tThe beauty of IIEF is that it can only be invoked once.")
})();

console.log("\n11. Where IIFF can be used?");
console.log(`It can be used in scenarios where you need to run the function only
once, like fetching some initial data, setting some configuration values,
checking system status on start up, etc. 
in Objects (Arrays) and Functions (call, apply, bind)\n`);

console.log(`NOTE: All functions are objects but not all object are functions.
What distinguishes the function from other objects is that functions can be 
called. In brief, they are 'Function' objects.`)

const user = {
    userName: "codingmonk",
    dispayName: "John",
    sendMessage: (message) => {
        console.log(`Sending ${message} to ${this.displayName}`);
        console.log(`Sending ${message} to ${student.displayName}`);
    }  
}
const student = {
    displayName: "Jill"
}
user.sendMessage('Hello...');

console.log("\n12. Using call() method to invoke on another object");
user.sendMessage.call(student, "Hello from John");

console.log("\n13. Using apply() method to invoke on another object ");
user.sendMessage.apply(student, ["[Hello from John]"]);

console.log("\n14. Using bind method");
let sendMessageToStudent = user.sendMessage.bind(student);
sendMessageToStudent("Yet another message");

// console.log("\n15. Constructor function");
// console.log("\n16. Why use a prototype for adding instance methods?");
// console.log("\n17. Providing protection against missing 'new' for invoking constructor function");
// console.log("\n18. How to return a custom object from constructor function?");
// console.log("\n19. Singleton");
// console.log("\n20. Closures");
// console.log("\n21. Applications of Closures:");
// console.log("\t- Partial Application - Function Fragments");
// console.log("\t- Event Handlers");
// console.log("\t- AJAX");
// console.log("\t- Private Methods");

// eof
