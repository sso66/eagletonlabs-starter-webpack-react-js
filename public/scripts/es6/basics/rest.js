// File: es6/basics/rest.js
// Date: 10/15/2020

// 7. Rest operator
const poniesInRace = ['Stormy Daniels']

// ES5+
// function addPonies(ponies) {
//   for (var i = 0; i < arguments.length; i++) {
//     poniesInRace.push(arguments[i]);
//   }
// }
// addPonies('Rainbow Dash', 'Pinkie Pie');

// console.log("ES5+: " + poniesInRace.length);
// console.log(poniesInRace[0]);
// console.log(poniesInRace[1]);
// console.log(poniesInRace[2]);

// ES6+ for...of Loop for Objects
// function addPonies(...ponies) {
//   for (let pony of ponies) {
//     poniesInRace.push(pony);
//   }
// }
// addPonies('Rainbow Dash', 'Pinkie Pie');

// console.log("ES6+: " + poniesInRace.length);
// console.log(poniesInRace[0]);
// console.log(poniesInRace[1]);
// console.log(poniesInRace[2]);

const addPonies= (...ponies) => {
  console.log(...ponies)
  for (let pony of ponies) {
    poniesInRace.push(pony);
  }
}
addPonies('Rainbow Dash', 'Pinkie Pie');

console.log("ES6+: " + poniesInRace.length);
console.log(poniesInRace[0]);
console.log(poniesInRace[1]);
console.log(poniesInRace[2]);


// eof
