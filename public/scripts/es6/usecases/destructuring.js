// File: es6/usecases/destructuring.js
// Date: 10/15/2020

let foo = ['one', 'two', 'three'];
let [one, two, three] = foo;
console.log(two);


let myModule = {
    drawSquare: function drawSquare(length){/* implementation */},
    drawCircle: function drawCircle(length){/* implementation */},
    drawText: function drawText(length){/* implementation */}
}

let { drawSquare, drawText } = myModule;

drawSquare(5);
drawText('hello');

// eof