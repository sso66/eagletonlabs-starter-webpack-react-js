// File: es6/basics/parameters.js
// Date: 10/15/2020

console.log("\n6. Default parameters and values");
// ES5+
// function getPonies(size, page) {
//   size = size || 0;
//   page = page || 1;

//   console.log("size: " + size + "," + "page: " + page);
//   return { size, page };
// }
// getPonies(20, 2);
// getPonies();
// getPonies(15);


// ES6+
// function getPonies(size = 10, page =1) {
    // Now it is perfectly clear that the size parameter will be 10,
    // and the page parameter will be 1 if not provided.
    //...
//     api.get(size, page);
// }

// The default value can also be a normal or array function
// function defaultSize() { return 10; };
const defaultSize = () => 10;

// function getPonies(size = defaultSize(), page = 1) {
//     // the defaultSize method will be called if size is not provided
//     // api.get(size, page);
//     return console.log("size: " + size + ", " + "page: " + page);
// }

// KVC for Function first-class object
const getPonies = (size = defaultSize(), page = 1) => 
    console.log("size: " + size + ", " + "page: " + page);

// KVO for Function first-class object
getPonies(20, 2);
getPonies();
getPonies(15);



// eof
