// assignment.js
// 5. Destructuring assignments

// ES5 w/var
// var httpOptions = { timeout: 2000, isCache: true };
// var httpTimeout = httpOptions.timeout;
// var httpCache = httpOptions.isCache;
// console.log(httpTimeout + " : " + httpCache);

// ES5 w/const
//const httpOptions = { timeout: 2000, isCache: true };

// // regular assignment different key/value
// const httpTmeout = httpOptions.timeout;
// const httpCache = httpOptions.isCache;
// console.log("regular " + httpTmeout + " : " + httpCache);

// ES6
const httpOptions = { timeout: 2000, isCache: true };
// later with destructuring assignment with different key/value
const { timeout: httpTimeout, isCache: httpCache } = httpOptions;
console.log("destructuring (different kvo): " + httpTimeout + " : " + httpCache);

//ES5 w/const
// regular assignment same key/value
// const timeout = httpOptions.timeout;
// const isCache = httpOptions.isCache;
// console.log("regular " + timeout + " : " + isCache);

// later with destructuring assignment with same key/value
const { timeout, isCache } = httpOptions;
// you now have a variable named 'timeout'
// and one named 'isCache' with correct values
console.log("destructuring (same kvo): " + timeout + " : " + isCache);

// nested objects
const httpOptions2 = { timeout: 2000, cache: { age: 2 }, status: 'todo' };

// later
const { cache: { age } } = httpOptions2;
// you now have a variable named 'age' with 2
console.log("destructuring (nested objects) age: " + age);

// multiple return values
function randomPonyInRace() {
  const pony = { name: 'Rainbow Dash' };
  const position = 2;
  // ...
  return { pony, position }
}
// ES5
const ponyInRace = randomPonyInRace();
console.log(("ES5: " + ponyInRace.pony.name + " : " + ponyInRace.position));
// ES6
const { position, ponyName } = randomPonyInRace();
console.log(("ES6: " + ponyInRace.pony.name + " : " + ponyInRace.position));
