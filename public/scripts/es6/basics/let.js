// File: scripts/es6/basics/let.js
// Date: 10/18/2020
// Note: ES6+ Basic Patterns & Paradigms

console.log("\nKVC/KVO - key: identity; value: hierarchy for ES6+ Objects | Arrays | Functions");

console.log ("\n1. Transpilers -  Babel");
console.log("\n2. let keyword for mutable assignments for parameters/arguments.");

// ES5+ var variables and the concept of 'hoisting'
// function getPonyFullName(pony) {
//   var name // ES5
//   if (pony.isChampion) {
//     // var name = 'Champion ' + pony.name; // ES5
//     name = 'Champion ' + pony.name;

//     return name;
//   }
//   // name is still accessible here
//   return pony.name;
// }

// ES6+ let block-scoped variables with normal named function
// function getPonyFullName(pony) {
//   if (pony.isChampion) {
//     let name = 'Champion ' + pony.name; // ES6
//     name = 'Champion ' + pony.name;
//     return name;
//   }
//   // name is not accessible here
//   return pony.name;
// }

// ES6+ let block-scoped variables with Arrow function
const getPonyFullName = (pony) => {
  if (pony.isChampion) {
    let name = 'Champion ' + pony.name; // ES6
    name = 'Champion ' + pony.name;
    return name;
  }
  // name is not accessible here
  return pony.name;
}

const pony = { name: 'Eagleton Designs', isChampion: true };
console.log('\nreturn: ECMASCRIPT 2017 ES6+: ' + getPonyFullName(pony));

// eof
