// File: es6/usecases/arrow.js
// Date: 10/15/2020

let items = [11, 22, 33];
const incrementedItems = items.map((x, i) => console.log(i +': ' + (x+1)));

items.forEach((x, i) => {
    console.log(i +': ' + (x+1));
});