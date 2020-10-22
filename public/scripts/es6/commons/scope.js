// File: es6/commons/scope.js
// Date: 10/20/2020

const { array } = require("prop-types");
const { cloneElement } = require("react");

// Note: Understanding scopes, functions and contexts in JavaScript
console.log("Scopes, Functions and Contexts in ES6+");
console.log("\n1. The Variables: var, let and const");


console.log("\n2. Arrow Function '=>'");


console.log("\n3. Default Parameters");
// Instead of conditional logic using ES5+ if/else or ternary operators usecases.
const announcePlayer = (firstName, lastName, teamName="unaffiliated") => 
  console.log(`${firstName} ${lastName} ${teamName}`);

announcePlayer('Stephen', 'Curry', 'Golden State Warriors');
announcePlayer('Zell', 'Liew');


console.log("\n4. Destructuring");
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
console.log('___ swap array ___')
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
function sayMyName({ firstName = 'Zell', lastName = 'Liew'} = {}) {
  console.log(firstName + ' ' + lastName)
}
// Combining a few ES6+ features together.
sayMyName();
sayMyName({firstName: 'Zell'});
sayMyName({firstName: 'Vincy', lastName: 'Zhang'})

console.log("\nThe concept of REST parameter and SPREAD operator");
// Old ES5+ way
function sum() {
  let result = 0;
  for (let i =0; i < arguments.length; i++) {
    result += arguments[i];
  }
  console.log("result = " + result);
  return result;
}
// JS invocation order?
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("sum = " + sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// New ES6+ way to pack all comma separated arguments packs straight into an array
//  The ...rest parameter (argument)
const $sum = (...args) =>  args.reduce(($sum, current) => $sum + current, 0); // Redux?
console.log("$sum = " + $sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function _sum(...args) {
  return args.reduce((_sum, current) => _sum + current, 0);
}
console.log("_sum = " + _sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

let [firstRest, secondRest, thirdRest, ...restOfScores] = scores;
console.log("restOfScores: " + restOfScores);
// New ES6+ way to take and array and spreads (unpacks) it into a comma separated list of arguments
// The ...spread operator)
let spreadOfList = ['one', 'two', 'three'];
console.log(...spreadOfList);
console.log('one', 'two', 'three');
let array1 = ['one', 'two']
let array2 = ['three', 'four']
let array3 = ['five', 'six', 'seven']
// ES5+ way
let combinedArrayES5 = array1.concat(array2).concat(array3);
console.log("combinedArrayES5 " + combinedArrayES5);
// ES6+ way
let combinedArrayES6 = [...array1, ...array2, ...array3]
console.log("combinedArrayES6 " + combinedArrayES6);


console.log("\n5. Enhanced Object Literals");
// 1. Property Value (vs. Variable Value) Shorthands
const fullName = 'Zell Liew ES6+ features'
// ES6+ way of creating object w/o 'new' keyword
const ZellLiew = {
  fullName
}
console.log(ZellLiew.fullName)
// 2. Method Shorthands
// ES5+ way
const anObjectES5 = {
  aMethod: function () { console.log("I'm a method shorthand in ES5+!~~") }
}
anObjectES5.aMethod()

const anObjectES6 = {
   aMethod() { console.log("I'm a method shorthand in ES6+!~~") }
}
anObjectES6.aMethod();
// 3 Computed Object Property Names
// You need a dynamic property name when you create objects!
// ES5+ way
const newPropertyName = 'smile'
// Create an object first
const anObjectProps = { aProperty: 'a value'}
// Then assign the property
anObjectProps[newPropertyName] = ':D'
// Adding a slightly different property and assigning it
anObjectProps['bigger ' + newPropertyName] = 'XD'
// Result
console.log(anObjectProps)

// ES6+ way
const anObjectPropsExtra = {
  aProperty: 'a value',
  //___ dynamic property names ___
  [newPropertyName]: ':D',
  ['bigger ' + newPropertyName]: 'XD',
}
// Result
console.log(anObjectPropsExtra)


console.log("\n6. Template Literals");
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

console.log("\n7. Promise API");

// eof
