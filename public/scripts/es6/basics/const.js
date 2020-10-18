// File: es6/basics/const.js
// Date: 10/15/2020
// Note: ES6+ Basic Patterns & Paradigms
/*
 * When you declare a variable with const, it has to be initialized
 * and you can't assign another value later
 */

console.log("\n3. const keyword for immutable variable assignments for parameters/arguments.");

// ES6+ Constants
const poniesInRace = 0;
// poniesInRace = 7; // can't assign another value
console.log('poniesInRace = ' + poniesInRace);

// OBJECT: can initial a constant with and object and later modify object content
const PONY = {};
PONY.color = 'blue';
//const PONY = {}; // SyntaxError!
console.log("PONY.color = " + PONY.color);
// ARRAY: same thing...
const PONIES = [];
PONIES.push({ color: 'red' });
console.log("PONIES.color = " + PONIES[0].color);

// eof
