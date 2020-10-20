// File: arrow.js
// Date: 10/15/2020

let array = [1, 20, 3, 40, 5];

// Normal function
let moreThan20es5 = array.filter(function(num) {
	return num > 20
})
console.log("Normal function return value: " + moreThan20es5)

// Arrow function
// Collection & Iteration w/ Array's filter, slice & map methods
let moreThan20es6filter = array.filter(num => num > 20)
let moreThan20es6slice = array.slice(num => num > 20)	// DO
// let moreThan20es6splice = array.splice(num => num > 20) // DON'T
let moreThan20es6map = array.map(value => value = value + 1)

console.log(`ES6-filter: ${ moreThan20es6filter }`)
console.log(`ES5-slice:  ${ moreThan20es6slice }`)  // DO
// console.log(`ES5-splice: ${ moreThan20es6splice }`) // DON'T
console.log(`ES6-map: ${ moreThan20es6map }`)
console.log(array.map(num => num = num + 1))

let R = (accumulator, currentValue) => accumulator + currentValue;
console.log('ES6-reduce: ' + array.reduce(R));
// eof