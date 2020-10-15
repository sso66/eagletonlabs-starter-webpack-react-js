// File: es6/basics/constructing.js
// Date: 10/15/2020

// 4. Creating objects
/* 
 * Not with ES5+ new keyword, there is a shortcut to
 * creating object in ES6+.  
 */

// ES6+
// function createPony() {
//   const name = 'Rainbow Dash';
//   const color = 'blue';
//   return { name: name, color: color };
// }
//
// let pony = createPony();
// console.log('Pony: ' + pony.name);

// ES6+ simplified
// function createPony() {
//   const name = 'Rainbow Dash';
//   const color = 'blue';
//   return { name, color };
// }

// ES6+ simplified with Arrow function
const createPony = () => {
  const name = 'Rainbow Dash';
  const color = 'blue';
  return { name, color };
}

let pony = createPony();
console.log('Pony name: ' + pony.name);

// Enhanced object literals
const fullname = 'Stephen Oo'
const Person = {
    fullname
}
console.log(Person.fullname);

// Computed Object Property Names
const newPropertyName = 'smile';
const anObject = { aProperty: 'a value'};
anObject[newPropertyName] = ':D';
anObject['bigger' + newPropertyName] = 'XD';
console.log(anObject);
console.log("New Property Name: " + anObject.biggersmile);

// eof
