// File: es6/basics/creating.js
// Date: 10/17/2020
// Note: Function as first-class objects: Composition (Polymorphism)

console.log("\n4. Creating objects");
/* 
 * Not with ES5+ new keyword, there is a shortcut to
 * creating object in ES6+.  
 */

// ES5+
// function createPony() {
//   const name = 'Rainbow Dash';
//   const color = 'blue';
//   return { name: name, color: color };
// }
//
// let pony = createPony();
// console.log('Pony: ' + pony.name);

// ES6+ simplified with normal function for Tasks
// function createPony() {
//   const name = 'Rainbow Dash';
//   const color = 'blue';
//   return { name, color };
// }

// ES6+ simplified with Arrow function for creating objects
const createPony = (name='Rainbow Dash', color='blue') => { 
  // const name = 'Rainbow Dash';
  // const color = 'blue';
  const fn = () => "Pony function: "+ (10 * 10);
  return { name, color, fn };
}
// ES6+ let keyword for array useCases(pattern)
let pony = createPony();
console.log('Pony name: ' + pony.name);
console.log('Pony color: ' + pony.color)
console.log('Pony fn: ' + pony.fn());
// Enhanced object literals
const fullname = 'Stephen Oo'
const Person = {
    fullname
}
console.log(Person.fullname);

// Computed Object Property Names for "Mobile First" RWD-SPA
const newPropertyName = 'smile';
const anObject = { aProperty: 'a value'};
anObject[newPropertyName] = ':D';
anObject['bigger' + newPropertyName] = 'XD';
console.log(anObject);
console.log("New Property Name: " + anObject.biggersmile);

// eof
