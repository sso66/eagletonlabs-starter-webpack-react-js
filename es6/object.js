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
// eof
