// File: es6/commons/var.js

const { object } = require("prop-types");

// Date: 10/19/2020
console.log("\n1. ES6+ Variables");

var me = 'Zell'; // global scope
function sayMe() {
    if (true) {
        // override a variable without indending to do so
        var me = 'Sleepy head'; // local scope
    }
    console.log(me)
}
sayMe();
console.log(me);

// var in the for loop situation
// for (var i = 1; i < 5; i++) {
//     console.log(i);
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// console.log("closure function");
// function logLater(i) {
//     setTimeout(function() {
//         console.log("timeout: " + i)
//         }, 1000
//     );
// };

// for (var i = 1; i < 5; i++) {
// 	console.log("forloop: " + i);
// //	setTimeout(function() {
// //		console.log("timeout" + i) 
// //		}, 1000
// //	)
// 	logLater(i);
// };

// ES6+ use of let block-scoped variable without additional functions
for (let i = 1; i < 5; i++) {
	console.log("forloop: " + i);
	setTimeout(function() {
		console.log("timeout: " + i) 
		}, 1000
	)
};

// let vs const - when to use when not to use in scopes!
const name = "Zell";
// name = "Sleep head"; cannot be reassigned once declared

let name1 = 'Zell';
name1 = 'Sleepy head'; // can be reassigned after being declared

console.log(name1);

// ES6+ code shorthand to make anonymous functions.
console.log("\n2. Arrow Functions");
let array = [1, 7, 98, 5, 4, 2];
// ES5+ way
var moreThan20 = array.filter(function(num) {
    return num > 20;
});
console.log(moreThan20);

// ES6+ way
let moreThan20Arrow = array.filter((num) =>  num > 20)
console.log(moreThan20Arrow);
console.log("\n___ The nitty-gritty of arrow functions ___");
console.log(`1st. creating normal named function
2nd. creating anonymous function
3rd. creating functions directly as an argument to another function or method`);
function namedFunction() {
    console.log("___ namedFunction created ___");
}
namedFunction();
// Arrow Function
const namedFunctionArrow = () => console.log("___ namedFunctionArrow created ___")
namedFunctionArrow();

var anonymousFunction = function() {
    console.log("___ anonymousFunction created ___")
}

console.log("___ anonymousFunction in callback created ___");
// button.addEventListener('click', function() {
//     console.log("anonymousFunction in callback created!");
// });
console.log("___ anonymousFunctionArrow in callback created ___");
// button.addEventListener('click', function() {
//     console.log("anonymousFunctionArrow in callback created!");
// });

console.log(`
An arrow function syntax & semantic PROCESS can change depending on two factors:
a) The accepting INPUT of dynamic passing variables - parameters.
b) An implicit return OUTPUT of dynamic variables - arguments.`);

console.log("\n___ The lexical 'this': context vs. scope ___");
// Global Context
// Function Context
function hello() {
    console.log(this);
}
hello(); // Window / Global Var

// Object Context
let o = {
    sayThis: function() {
        console.log(this);
    }
}
o.sayThis(); // o
// Constructor Context
function Person(age) {
    this.age = age
}
let greg = new Person(22)
let thomas = new Person(24)
console.log(greg);
console.log(thomas);
// Event Listener Function Context
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//     console.log(this) // button 
// })
console.log("\nWHEN NOT TO USE THE Arrow Functions?")
console.log(`In Arrow functions, 'this' never gets bound to new value,
no matter how the function is called. 'this' will always be the same
value as its surrounding code - lexical means relating to!`)

console.log("\nFirst, you never want to use arrow functions to declare object methods");
let obj = {
    // Don't do this
    notThis: () => {
        console.log(this) // Window
        // this.objectThis() // Uncaught TypeError
    },

    // Do this ES5+
    objectThis: function() {
        console.log(this)
    },
    // Or this, which is a new ES6+ shorthand
    objectThis2() {
        console.log(this) //
    }
}
console.log(obj.notThis);
console.log(obj.objectThis);
console.log(obj.objectThis2);

console.log(`\nSecond, you may not wat to use arrow function to create event listeners
because 'this' no longer binds to the element (button) you attached your event listener to.
However, you can always get the right 'this' context with 'event.currentTarget.`)
// button.addEventListiner('click', function() {
//     console.log(this) // button
// });
// button.addEventListener('click', e => {
//     console.log(this) // Window
//     console.log(e.currentTarget) // button
// }
console.log(`\nThird, you may not want to use the lexical 'this'
where 'this' binding changes without wanting it to. For example, in timeout function,
so you never have to deal with the 'this' 'that' or 'self' nonsense.`
);

let button = {
    // Old way ES5+
    oldWay: function() {
        let that = this;
        setTimeout(function() {
            console.log(this); // window
            console.log(that) // button
        }, 3000)
    },
    // New way ES6+ Arrow function
    newWay: function() {
        setTimeout(() => {
            console.log(this) // button
        }, 3000);
    }
}

console.log(`This use case is particulary helpful if you need to add or remove 
a CSS class selector after some time has elapsed:`)

let selector = {
    button: document.querySelector('button'),
    endAnimation: function() {
        this.button.classList.add('is-closing')
        setTimeout(() => {
            this.button.classList.remove('is-closing')
            this.button.classList.remove('is-open')
        }, 3000)
    }
}
// eof