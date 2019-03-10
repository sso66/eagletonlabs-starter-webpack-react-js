// object.js
// 4. Creating objects

// ES6
// function createPony() {
//   const name = 'Rainbow Dash';
//   const color = 'blue';
//   return { name: name, color: color };
// }
//
// let pony = createPony();
// console.log('Pony: ' + pony.name);

// ES6 simplified
function createPony() {
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
