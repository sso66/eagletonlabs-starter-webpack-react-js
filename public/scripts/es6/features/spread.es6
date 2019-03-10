// spread.es6

// function
const unpackTheSpread = (a, b) => a / b;

// scope
let args = [3, 5];

// context
console.log(unpackTheSpread(...args));

// scope
let cde = ['c', 'd', 'e'];

// function
let scale = ['a', 'b', ...cde, 'f'];

// context
console.log(scale);

// eof