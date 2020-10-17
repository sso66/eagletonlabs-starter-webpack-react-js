// File: es6/basics/const.js
// Date: 10/15/2020

/*
 * When you declare a variable with const, it has to be initialized
 * and you can't assign another value later
 */

console.log("\n3. const keyword for immutable variable assignments");

// ES6+ Constants
const poniesInRace = 0;
//poniesInRace = 7; // can't assign another value
console.log('poniesInRace = ' + poniesInRace);

const PONY = {};
PONY.color = 'blue';
//const PONY = {}; // SyntaxError!
console.log("PONY.color = " + PONY.color);

const PONIES = [];
PONIES.push({ color: 'blue' });
console.log("PONIES.color = " + PONIES[0].color);

// eof
