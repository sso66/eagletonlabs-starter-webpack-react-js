// File: es6/loops/ArrayExtra.js
// Date: 10/13/2020
// Note: Understanding ES6+ ArrayExtra's operations


/*
 * Many of the Array* methods are iterators. Instead of passing your
 * array (list) into for or while loop, you should use build-in Array
 * methods. Array Extra already have methods offering cleaner syntax
 * so why re-invent the wheel? Arrow function signature: () => {}
 */

// Create a string array
let fruit = ['pear', 'banana', 'orange', 'apple', 'pineapple'];
let print = (item, index, object) => console.log(item, index, object);
// Array.forEach 
// Return value: none
fruit.forEach(print);

// Create a number array
// let numbers = [0,1,2,3,4,5,6,7];
let numbers = [0,1,256,3,4,5,6,7]
// Array.every 
// Return value: boolean
let result = numbers.every(value => value < 10);
console.log("result: " + result);
// eof

let iterations = [0,10,2,3,4,5,6,7];
let condition = value => value < 10; // value is less than 10
// Array.some Return value: boolean
let some = iterations.some(condition); // true
console.log("some: " + some);
let every = iterations.every(condition); // false
console.log("every: " + every);

// Array.filter 
// Return value: new array consisting only of items that pass the condition.

let filtered = iterations.filter(condition);
console.log(filtered); // [0,2,3,4,5,6,7] --> 10 is filtered out
console.log(iterations); // Original array remained unchanged

// eof
