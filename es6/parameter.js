// parameters.js
// 6. Default parameters and values
// ES5
// function getPonies(size, page) {
//   size = size || 0;
//   page = page || 1;
//
//   //server.get(size, page);
//   console.log("size: " + size + "," + "page: " + page);
// }
//
// getPonies(20, 2);
// getPonies();
// getPonies(15);

// ES6
function defaultSize() { return 10; };

function getPonies(size = defaultSize(), page = 1) {
    //the defaultSize method will be called if size is not provided
    //server.get(size, page);
    console.log("size: " + size + ", " + "page: " + page);
}
console.log("ponies " + getPonies(3, 5));
// eof
