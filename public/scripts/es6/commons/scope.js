// File: es6/commons/scope.js
// Date: 10/20/2020
// Note: Understanding scopes, functions and contexts in JavaScript
console.log("Scopes, Functions and Contexts in ES6+");

console.log("\n1. Default Parameters");
// Instead of conditional logic using ES5+ if/else or ternary operators usecases.
const announcePlayer = (firstName, lastName, teamName="unaffiliated") => 
  console.log(`${firstName} ${lastName} ${teamName}`);

announcePlayer('Stephen', 'Curry', 'Golden State Warriors');
announcePlayer('Zell', 'Liew');

console.log("\n2. Destructuring");
const Zell = {
  firstName: 'Zell',
  lastName: 'Liew'
}
let { firstName, lastName } = Zell;
console.log(`${firstName} ${lastName}`);

let name = 'Zell Liew';
let course = {
  name: 'Transitioning from ES5+ to ES6+ syntax and semantics...',
  // ...other propertes
}
let { name:courseName } = course;
console.log(courseName);
// Destructuring Array: [pattern object] = [array object]
let [one, two, three] = [1, 2];
console.log(one);
console.log(two);
console.log(three);
let scores = ['98', '95', '93', '90', '87', '85'];
let [first, second, third, ...spread] = scores;
console.log(spread);
// Swapping Variables with Destructuring Arrays
let x = 2;
let y = 3;
console.log("(x, y) = " + x + ', '+ y); // semicolon delimiter is required.
[x, y] = [y, x];
console.log('swap array')
console.log("(x, y) = " + x + ', '+ y); 
// Destructuring Arrays and Objects while declaring Functions

function topThree(scores) {
  let [first, second, third] = scores;
  return {
    first,
    second,
    third
  }
}
let s = topThree(scores)
console.log(`return = function topThree(scores)--> ${s.first}, ${s.second}, ${s.third}`);
// A Quick Quiz: Combining destructuring and default parameters in a function declaration!
function sayMyName({
  firstName = 'Zell',
  lastName = 'Liew'
} = {}) {
  console.log(firstName + ' ' + lastName)
}
// Combining a few ES6+ features together.
sayMyName();
sayMyName({firstName: 'Zell'});
sayMyName({firstName: 'Vincy', lastName: 'Zhang'})



console.log("\n3. The REST parameter and SPREAD operator");

console.log("\n4. Enhanced Object Literals");

console.log("\n5. Template Literals");
let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // let str2 = strings[2];

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}

let output = myTag`That ${ person } is a ${ age }`;
console.log(output); // That Mike is a youngster

// eof
