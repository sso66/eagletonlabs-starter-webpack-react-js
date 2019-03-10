// module.js
// 13. Module patterns: Node.js CJS vs ES6 UMD (universal Module Definition)
// To expose a function to bet on a specific pony in the race, and...

export function bet(race, pony) {

  console.log(race + " : " + pony);
}
// a function to start the race
export function start(race) {
  console.log(race);
}

// Now, in one of the application components need
// to call thsese functions. In another file:
import { bet, start } from './races_services';
// later
bet(race, pony);
start(race);
// That's what is called a name export. Here we are importing the two functions,
// and we have to specify the filename containing these functions - here 'races_services'.

// Of course, you can import only one method if you need, you can even it an alias:
import { start as startRace }
// eof
