// File: es6/basics/template.js
// Date: 10/15/2020
console.log("\n12. Template literals: Format.js");

// ES5 strings formatting
let firstname = "Jane";
let lastname = "Doe";
// const fullname = 'Miss ' + firstname + ' ' + lastname;
// console.log(fullname);

// ES6 template literals formatting
const fullname = `Miss ${firstname} ${lastname}`;
console.log(fullname);

// HTML
const template = `<div><h1>Hello</h1></div>`;
console.log(template);
