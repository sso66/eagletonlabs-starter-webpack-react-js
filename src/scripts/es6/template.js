// template.js
// 12. Template literals

// ES5 strings
let firstname = "Jane";
let lastname = "Doe";
// const fullname = 'Miss ' + firstname + ' ' + lastname;
// console.log(fullname);

// ES6 template literals
const fullname = `Miss ${firstname} ${lastname}`;
console.log(fullname);

// HTML
const template = `<div><h1>Hello</h1></div>`;
console.log(template);
