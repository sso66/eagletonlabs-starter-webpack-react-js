// this.es6
// as simple function call
console.log(this)
console.log('global ' + this)

// as object method call
const o = {
	sayThis: function() {
		console.log(this)
	}
}
o.sayThis()

// as constructor function
function Person(age) {
	this.age = age;
}

let greg = new Person(22)
let tom = new Person(24)

// this refer to newly constructed object
console.log(greg)
console.log(tom)

/* 
// as in event listener 'this' is set to the element that fired the event
let button = document.querySelector('button')

button.addEventListener('click', function() {
	console.log(this) // button
}

Note: Above every function defines it's own 'this' value. In fat arrow
functions, 'this' never get bound to a new value no matter how the 
function is called.
*/
// eof