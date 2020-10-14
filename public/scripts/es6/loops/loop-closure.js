// File: public/scripts/es6/loops/loop.js
// Date: 10/14/2020
console.log("\nExplaining Nested Loops in Javascript");

(function nestedLoop() {
  const limit = 5;

  // OUTER LOOP:
  for(let outerLoop = 1; outerLoop <= limit; outerLoop++) {
    console.log("OuterLoop "+outerLoop);

    // INNER LOOP:
    for(let innerLoop = 1; innerLoop <= outerLoop; innerLoop++) {
        console.log("InnerLoop "+innerLoop);
    }
  }
})()

// eof
