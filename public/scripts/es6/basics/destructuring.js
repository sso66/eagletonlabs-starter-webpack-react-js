// File: es6/basics/destructuring.js
// Date: 10/15/2020
// Note: key/value Comprehension and key/value Observation
console.log("\n5. Destructuring Assignments: Object | Array with Function");

// ES5 w/var: WET
// var httpOptions = { timeout: 2000, isCache: true };
// var httpTimeout = httpOptions.timeout;
// var httpCache = httpOptions.isCache;
// console.log(httpTimeout + " : " + httpCache);

// ES5+ w/const or w/let...still WET
// const httpOptions = { timeout: 2000, isCache: true };

// Regular assignment different key/value
// const httpTmeout = httpOptions.timeout;
// const httpCache = httpOptions.isCache;
// console.log("regular " + httpTmeout + " : " + httpCache);

// ES6+ w/const or w/let DRY 
const httpOptions = { timeout: 2000, isCache: true };
// later with destructuring assignment with different key/value
const { timeout: httpTimeout, isCache: httpCache } = httpOptions;
console.log("destructuring (different KVO): " + httpTimeout + " : " + httpCache);

//ES5 w/const 
// regular assignment same key/value
// const timeout = httpOptions.timeout;
// const isCache = httpOptions.isCache;
// console.log("regular " + timeout + " : " + isCache);

// later with destructuring assignment with same key/value
// { pattern Object } = { design Object }
// [ pattern Array ] = [ design Array ]
const { timeout, isCache } = httpOptions;
// you now have a variable named 'timeout'
// and one named 'isCache' with correct values
console.log("destructuring (same KVO): " + timeout + " : " + isCache);

// nested objects
const httpOptions2 = { timeout: 2000, cache: { age: 2 }, status: 'todo' };

// later
const { cache: { age } } = httpOptions2;
// you now have a variable named 'age' with 2
console.log("destructuring (nested objects) age: " + age);

// multiple return values: normal function
// function randomPonyInRace() {
//   const pony = { name: 'Rainbow Dash' };
//   const position = 2;
//   // ...
//   return { pony, position }
// }

// multiple return values: arrow function
const randomPonyInRace = () => {
  const pony = { name: 'Rainbow Dash' };
  const position = 2;
  // ...
  return { pony, position }
}

// ES5+
const ponyInRace = randomPonyInRace();
console.log(("ES5+: " + ponyInRace.pony.name + " : " + ponyInRace.position));

// ES6+
const { position, ponyName } = randomPonyInRace();
console.log(("ES6+: " + ponyInRace.pony.name + " : " + ponyInRace.position));
