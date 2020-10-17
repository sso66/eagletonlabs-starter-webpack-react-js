// File: es6/array/ArrayNode.js
// Date: 10/17/2020
// Note: Understanding ES6+ Array Destructing operations

console.log("\n1. Array Basic Destructuring");
const introduction = ["Hello", 'I', "am", "Sarah", '.']; // common sentence
// const [greeting, pronoun] = introduction;
const [greeting, pronoun] = ["Hello", 'I', "am", "Sarah", '.']; // common sentence

console.log(greeting);
console.log(pronoun);

console.log("\n2. Declaring Variables before Assignment");
let greeting1 = "";
let pronoun1 = "";
[greeting1, pronoun1] = ["Hello", 'I', "am", "Sarah", '.']; // common sentence
console.log(greeting1);
console.log(pronoun1);

console.log("\n3. Skipping Items in an Array ");
const [greeting2, pronoun2] = ["Hello", 'I', "am", "Sarah", '.']; // common sentence
console.log(greeting2);
console.log(pronoun2);

console.log("\nSkip the first and third item on the list.");
const [,pronoun3,,name] = ["Hello", 'I', "am", "Sarah", '.']; // common sentence
console.log(pronoun3);
console.log(name);

console.log("\nSkip all items on the list.");
const [,,,,] = ["Hello", 'I', "am", "Sarah", '.']; // common sentence
console.log(introduction);

console.log("\n4. Assigning the ...rest of an Array");
const [greeting3, ...rest]= ["Hello", 'I', "am", "Sarah", '.']; // common sentence
console.log(greeting3);
console.log(rest)

console.log("\n5. Destructuring Assignment with Functions");
function useArray() {
    return ["Hello", 'I', "am", "Sarah", '.']; // common sentence
}
const [greeting4, pronoun4] = useArray();
console.log(greeting4);
console.log(pronoun4)

console.log("\n6. Using Default Values")
console.log("In case the value extracted from the array is 'undefined'");
const [greeting5 = "h1", name5 ="Sarah"] = ["hello"];
console.log(greeting5);
console.log(name5);

console.log("\n7. Swapping Values of Variables using Destructuring Assignment");
let a = 3;
let b = 6;

[a, b] = [b, a];
console.log("after: " + a + ", " + b);

console.log("Swapping 2D Array?")
const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log("after: " + arr); // [1,3,2]


//eof