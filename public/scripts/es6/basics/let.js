// let.js
// 1. Transpilers -  Babel
// 2. let keyword for mutable assignments
// ES5 var variables
// function getPonyFullName(pony) {
//   //var name; // ES5
//   if (pony.isChampion) {
//     var name = 'Champion ' + pony.name; // ES5
//     name = 'Champion ' + pony.name;
//     return name;
//   }
//   // name is still accessible here
//   return pony.name;
// }

// ES6 let variables
function getPonyFullName(pony) {
  if (pony.isChampion) {
    let name = 'Champion ' + pony.name; // ES6
    name = 'Champion ' + pony.name;
    return name;
  }
  // name is not accessible here
  return pony.name;
}

const pony = { name: 'Eagleton Designs', isChampion: true };
console.log('ECMASCRIPT 6: ' + getPonyFullName(pony));
// eof
