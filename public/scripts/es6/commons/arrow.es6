// arrow.es6
let array = [1,7,98,5,4,2];

// ES5 way
var moreThan20es5 = array.filter(function(num) {
	return num > 20
})
console.log("ES5 " + moreThan20es5)

// ES6 way: 
// Collection & Iteration w/ Array's filter, slice & map methods
let moreThan20es6filter = array.filter(num => num > 20)
let moreThan20es6slice = array.slice(num => num > 20)
let moreThan20es6splice = array.splice(num => num > 20)
let moreThan20es6map = array.map(num => num > 20)
console.log(`ES6-filter ${ moreThan20es6filter }`)
console.log(`ES6-slice  ${ moreThan20es6slice }`)
console.log(`ES6-splice ${ moreThan20es6splice }`)
console.log(`ES6-map ${ moreThan20es6map }`)
// eof