// File: public/scripts/es6/loops/loop.js
// Date: 10/14/2020
console.log("\nExplaining Nested Loops in Javascript");

function outer(limit) {
    for(let outerLoop =1; outerLoop <= limit; outerLoop++) {
      //OUTERLOOP
      console.log("OuterLoop "+ outerLoop);
      //INNERLOOP
      console.log(inner(outerLoop));
    }
  }

  function inner(outerLoop) {
    for(let innerLoop =1; innerLoop<=outerLoop; innerLoop++)
    {
      console.log("InnerLoop "+innerLoop);
    }
}

console.log(outer(5))

// eof
