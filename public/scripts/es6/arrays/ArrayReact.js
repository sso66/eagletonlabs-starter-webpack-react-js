// File: es6/arrays/ArrayReact.js
// Date: 10/13/2020
// Note: Understanding ES6+ ArrayExtra's operations

/*
 * These methods help developers write clean and readable code. A
 * lot these methods reduce the need to reach for utilities like
 * Lodash.
 * 
 * All these Array methods are chaingable, meaning they can used
 * in combination with one another and they don't mutate data, which
 * is especially important working with React/Redux.
 * 
 * With all these Array and Object methods you'll find you never have
 * to reach for a for or while loop ever again!
 */

console.log('Array.filter()');
const studentAge = [17, 16, 18, 19, 21, 17];
const ableToDrink = studentAge.filter(age => age > 18);
console.log(ableToDrink);

console.log('Array.map()');
const numbers = [2, 3, 4, 5]
const dollars = numbers.map(number => '$' + number);
console.log(dollars);
