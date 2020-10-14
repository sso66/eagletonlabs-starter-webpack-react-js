// File: public/scripts/es6/loops/loop.js
// Date: 10/14/2020
console.log("\nExplaining Nested Loops in Javascript");

// Loop's Length (min/max)
const limit = 3;
const max = 5;
const min = 2;

// for(let outerLoop = 1; outerLoop <= limit; outerLoop++) {
//   console.log("OuterLoop "+outerLoop);

//   // INNER LOOP:
//   for(let innerLoop = 1; innerLoop <= outerLoop; innerLoop++) {
//       console.log("InnerLoop "+innerLoop);
//   }
// }

for (let i = 0; i < limit; i++) {
  console.log("loop-default, i = " + i);
}

console.log("\nThe condition i > 1 might decieve you into thinking to print 2 times.")
for (let i = 0;; i++) {
  console.log("loop-breaker, i = " + i);
  if (i > 1)
    break;
}
console.log("\nBut it's printed 3 times! Because count started with 0-index and i > 1 === 2.")


console.log("\nMultiple Statements in Loops! Increment Numbers");
let count = 0;
function sequence() { count++ };

for (let i = 0; i < limit; i++, sequence());
console.log("counter: " + count)

console.log("\nfor loops and ES6+ let scope?");
for (let i = 0; i < limit; i++) { 
  let x = i; 
  console.log("x: " + x);
}
console.log("\nNested for Loops");
const row = 2;
const col = 2;
const key = 1;

for (let y = 0; y < col; y++)
  for (let x = 0; x < row; x++)
    for (let z = 0; z < key; z++)
      console.log(x, y, z);

console.log("\nSkipping Steps: concept of switches");
for (let i = 0; i < limit; i++) { 
  if (i === 1) 
    continue; 
    console.log("circuit switch: " + i);
}

console.log("\nBreaking Early: concept of switches");
for (let i = 0;; i++) {  
    console.log("circuit breaker: " + i);
    break;
}

console.log("\nBreaking to a Label: concept of switches");

let c = 0;

outer:
for (let i = 0; i < 5; i++) {
  inner:
    for (let j = 0; j < 5; j++) {
      c++;
      if (i == 2) break outer;
    }
}
console.log("outer breaker label: " + c);

// outer:
// for (let i = 0; i < 5; i++) {
//   inner:
//     for (let j = 0; j < 5; j++) {
//       c++;
//       if (i == 2) break inner;
//     }
// }
// console.log("inner breaker label: " + c);

console.log("\nBreaking from a labeled non for-loop scope");
block: {
  console.log("before");
  break block;
  console.log("after");
}

console.log("\nfor...of Loops and Generator asychronous functions");
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
for (let value of generator())
  console.log( value );

console.log("\nfor...of Loops and Strings");  
let string = 'text';

for (let value of string)
  console.log( value );

console.log("\nfor...of Loops And Arrays");
let array = [0, 1, 2];
for (let value of array)
   console.log( value );

console.log("\nfor…of Loops And Objects (won’t work)");
// let object = { a: 1, b: 2, c: 3 };
// for (let value of object) // Error: object is not iterable
//    console.log( value );

console.log("\nfor…of loops and objects that were converted to iterables");
let enumerable = { property : 1, method : () => {} };
for (let key of Object.keys( enumerable )) console.log("Object.keys(): " + key);
for (let value of Object.values( enumerable )) console.log("Object.values():" + value);
for (let entry of Object.entries( enumerable )) console.log("Object.entries(): " + entry);

console.log("\nfor...in Loops")
let object = { a: 1, b: 2, c: 3, method: () => { } };
for (let value in object)
    console.log(value, object[value]);

console.log("\nWhile Loops")
let c = 0;
while (c++ < 5)
    console.log(c);
    
// eof
