// File: es6/basics/parameters.js
// Date: 10/15/2020

// 6. Default parameters and values
// ES5+
// function getPonies(size, page) {
//   size = size || 0;
//   page = page || 1;

//   //server.get(size, page);
//   console.log("size: " + size + "," + "page: " + page);
//   return { size, page };
// }

// getPonies(20, 2);
// getPonies();
// getPonies(15);


// ES6+
// The default value can also be a function
// function defaultSize() { return 10; };
const defaultSize = () => 10;

// function getPonies(size = defaultSize(), page = 1) {
//     //the defaultSize method will be called if size is not provided
//     //server.get(size, page);
//     return console.log("size: " + size + ", " + "page: " + page);
// }
// KVC
const getPonies = (size = defaultSize(), page = 1) => 
    console.log("size: " + size + ", " + "page: " + page);

// KVO
getPonies(20, 2);
getPonies();
getPonies(15);



// eof
