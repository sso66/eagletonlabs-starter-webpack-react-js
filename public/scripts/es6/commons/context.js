// File: es6/commons/context.js
// Date: 10/20/2020
// Note: Understanding 'this in JavaScript

/* 
 * Note: The problem with ES5+ is that there is no concept of
 * BFC - Block Format Code. 
 */

console.log(`\nWhat actually 'this' is and why we need 'this'?

The answer to 'this' as it says point to the current value in JavaScript in its context.

JavaScript is based on scopes, functions, and contexts.

JavaScript also is a dynamic (RTTI/DMD) scripting language. This dynamic behavior makes 
'this also to behave differently too.

Whenever you want to access the values in a function or context you use 'this'.
'this' behaves differently in the different context.`);

console.log("\n1. Global Context");
// In Node.js, 'this' at the module level is actually the exports object.
module.exports.color = 'red'; // Node.js
console.log(this.color);
console.log(module.exports.color); 
console.log(this);  // export object
console.log(this === module.exports); // true

console.log("\n2. Function Context");

function printColor() {
    var color = 'blue';
    console.log(module.exports.color);
    return module.exports.color;
}
console.log("printColor(): " + printColor());

console.log("\n3. Object Context");
module.exports = obj = {
    color: 'orange',
    getColor: function() {
        console.log(this.color)
        return this.color;
    }
}
console.log("obj.getColor(): " + obj.getColor());

// call() method
console.log("printColor.call: " + printColor.call(obj)); 
// apply() methods
console.log("printColor.apply w/obj: " + printColor.apply(obj)); 
console.log("printColor.apply w/null: " + printColor.apply(null, ['green'])); 
// bind() method
var p = printColor.bind(obj);
console.log("p(): " + p());

console.log("\n4. Constructor Function Context");
function Colors(cName) {
    this.cName = cName;
    this.print = function() {
        console.log(`I am from constructor ${o.cName}`);
        return this.cName;
    }
}
var o = new Colors('purple');
console.log("o.print(): " + o.print());

console.log("\n5. Event Listener Function Context");
console.log("\n6. Style Object Context");   
console.log("\n7. Arrow Function Context");

// eof