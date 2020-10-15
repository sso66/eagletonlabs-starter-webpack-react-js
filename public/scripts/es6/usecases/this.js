// File: es6/usecases/this.js
// Date: 10/15/2020

class Toppings {
    constructor(toppings) {
        this.toppings = Array.isArray(toppings) ? toppings : [];
   }
   outputList() {
        this.toppings.forEach((toppings, i) => {
            console.log(toppings, i + '/' + this.toppings.length)
        })
   }
}

let myToppings = new Toppings(['cheese', 'lettuce'])

myToppings.outputList();

// Template Strings
const name = 'Sam';
const age = 42;

console.log(`Hello my name is ${name}, I am ${age} years old.`);


// eof
