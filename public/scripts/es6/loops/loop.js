// File: public/scripts/es6/loops/loop.js
// Date: 10/14/2020
console.log("\nExplaining Nested Loops in Javascript");

var limit = 3;

// function nestedLoop(limit) {   
  // OUTER LOOP:
  for (let outerLoop = 1; outerLoop <= limit; outerLoop++) {
/*
OUTER LOOP Definition: 
  1. outerLoop initial value = 1; (loop start from 1 instead of default 0-index)

  2. condition: outerLoop <= limit; Loop will continue until value of 
      outer loop is less than equal to limit provided by user in function argument.

  3. outerLoop++: if condition is true outerLoop will increment by 1 with each iteration.

  Iteration (OUTER LOOP) 1st take: 
    Check or test condition in outer loop; if outerLoop(value = 1) <= limit (value = 5)
    its true as 1 is less than 5 OUTER LOOP continues print (OuterLoop 1) on console, 
    and enter in INNER LOOP 

  Iteration(OUTER LOOP) 2nd take: 
    Increment the value of outerLoop by 1 (outerLoop = 2) now.
    Check or test heck condition if outerLoop <= limit (2 less than equal to 5) 
    condition is  true so print (OuterLoop 2) on console and continues to 
    innerLoop...
*/
      console.log("OuterLoop "+outerLoop);

      // INNER LOOP:
      for(let innerLoop = 1; innerLoop <= outerLoop; innerLoop++) {
        console.log("InnerLoop "+innerLoop);
      }
    }
// }

/* 
INNER LOOP Definition:
  Loop start from value 1, loop will continue until value of innerLoop is less 
  than equal to outerLoop, if condition true value of innerLoop incremented by 1
  with each Iteration

========================  INSIDE OF OUTER LOOP ITERATION 1 ========================
Iteration1(INNER LOOP) 
  Check condition if innerLoop value (which is 1) is less than equal to 
  outerLoop value (which is also 1) so condition is true as innerLoop is equal to 
  outerLoop (1 === 1) so print (InnerLoop 1) in second line of console
  increment the value of innerLoop by 1 (value of innerLoop is now 2)
  INNER LOOP continues to iteration 2 ....

Iteration(INNER LOOP) 
  Check or test condition (if innerLoop(value = 2) less than euqal to  
  outerLoop(value = 1)) condition is false as 2 is greater than 1 so 
  INNER LOOP ENDS  and goes back to OUTER LOOP 2nd Iteration.

Note: SEE ABOVE 2ND ITERATION OF OUTER LOOP
=======================END OF 1ST ITERATION OF OUTER LOOP ===========================

========================  INSIDE OF OUTER LOOP ITERATION 2 ==========================
TIP FOR INNER LOOP: 
  So if you remember that we leave our innerLoop value = 2 when we end the INNER LOOP
  in 1st Iteration of OUTER LOOP but thats the key point in INNER LOOP that the value 
  it ends in 1st Iteration of OUTER LOOP it will not continue from that value infact 
  it re-start its iteration from 1 and start from initial value = 1 in our last 
  iteration of OUTER LOOP value of innerLoop is 2 (2nd Iteration of INNER LOOP). 
  
  So now INNER LOOP is start inside in 2nd iteration of OUTER LOOP and INNER LOOP 
  again restart from 1st iteration and again start from value 1.

  2nd ITERATION OF OUTER LOOP):
    INNER LOOP (1st Iteration) in condition it checked if 
    innerLoop(value=1) <= outerLoop(value=2) as 1 is less 2 which is true so print 
    (InnerLoop 1) on console condition is true so INNER LOOP continues and increment 
    value of innerLoop by 1 (innerLoop value is 2 now) and goes to 2nd Iteration of 
    the INNER LOOP.

  2nd ITERATION OF OUTER LOOP) 
    INNER LOOP (2nd Iteration) again check condtion which is true as value of innerLoop(2)
    is equal to outerLoop(2), then Loop continues and increment value of innerLoop by 1 so 
    go into 3rd Iteration of INNER LOOP check or test condition which is false because value
    of innerLoop is now 3 and greater than outerLoop value = 2. 
    
    Inner loop ends and continue to 3rd ITERATION OF OUTER LOOP. 

    And this process is continues until the condition of OUTER LOOP becomes false which is
    (outerLoop less than equal to limit).

THINGS TO REMEMBER:
  1- in each Iteration of OUTER LOOP inner loop continue from its initial value
      and repeat its all iterations until its condition become false.

  2- use nested loops when you have to worked on multi-dimension arrays or calculating the 
      mathematical calculation which involve multiple values and each value is increment in
      next cycle.

  3- try to separate your inner loop in another function. if we take above example and separate 
      both loops in two function it would be like this:

      function outer(limit)
      {
        for(let outerLoop =1; outerLoop <= limit; outerLoop++)
        {
          //OUTERLOOP
          console.log("OuterLoop "+ outerLoop);
          //INNERLOOP
          console.log(inner(outerLoop));
        }
      }

      function inner(outerLoop)
      {
          for(let innerLoop =1; innerLoop<=outerLoop; innerLoop++)
          {
            console.log("InnerLoop "+innerLoop);
          }
      }
*/
