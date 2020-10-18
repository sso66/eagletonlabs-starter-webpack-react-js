// File: es6/arrays/ArrayExtra.js
// Date: 10/13/2020
// Note: // The Chronicles of JavaScript Objects

console.log("\nArrayExtra.js");
/*
 * Many of the Array* methods are iterators. Instead of passing your
 * array (list) into for or while loop, you should use build-in Array
 * methods. Array Extra already have methods offering cleaner syntax
 * so why re-invent the wheel? Arrow function signature: () => {}
 */

// Create a string array
let fruit = ['pear', 'banana', 'orange', 'apple', 'pineapple'];
let print = (item, index, object) => console.log(item, index, object);

console.log('\nArray.forEach'); 
// Return value: none
fruit.forEach(print);

// Create a number array
// let numbers = [0,1,2,3,4,5,6,7];
let numbers = [0,1,256,3,4,5,6,7]

console.log('\nArray.every'); 
// Return value: boolean
let result = numbers.every(value => value < 10);
console.log(result);

let iterations = [0,10,2,3,4,5,6,7];
let condition = value => value < 10; // value is less than 10

console.log('\nArray.some'); 
// Return value: boolean
let some = iterations.some(condition); // true
console.log(some);
let every = iterations.every(condition); // false
console.log("Array.every: " + every);

console.log('\nArray.filter');
// Return value: new array consisting only of items that pass the condition.
let filtered = iterations.filter(condition);
console.log(filtered); // [0,2,3,4,5,6,7] --> 10 is filtered out
console.log(iterations); // Original array remained unchanged

console.log('\nArray.map'); 
// Return value: a copy of the oritinal array with modified values (if any)
let results = numbers.map(value => value = value + 1);
console.log(result); // [0,257,3,4,5,6,7] --> increment by 1
console.log(iterations); // Original array remained unchanged

console.log('\nArray.reduce: '); 
// Return value: accumulator (count object)?
const reducers = [1, 2, 4];
const R = (accumulator, currentValue) => accumulator + currentValue;
console.log(reducers.reduce(R)); // 1 + 2 + 4 = 7

// eof
