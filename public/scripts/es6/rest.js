// rest.js
// 7. Rest operator
const poniesInRace = ['Stormy Daniels']
// ES5
function addPonies(ponies) {
  for (var i = 0; i < arguments.length; i++) {
    poniesInRace.push(arguments[i]);
  }
}
addPonies('Rainbow Dash', 'Pinkie Pie');
console.log("ES5: " + poniesInRace.length);

// ES6
function addPonies(...ponies) {
  for (let pony of ponies) {
    poniesInRace.push(pony);
  }
}

console.log("ES6: " + poniesInRace.length);
console.log(poniesInRace[0]);
console.log(poniesInRace[1]);
console.log(poniesInRace[2]);
// eof
