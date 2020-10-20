// File: es6/commons/var.js
// Date: 10/19/2020

var me = 'Zell'; // global scope

function sayMe() {
    if (true) {
        // override a variable without indending to do so
        var me = 'Sleepy head'; // local scope
    }
    console.log(me)
}

sayMe();
console.log(me);

// var in the for loop situation
// for (var i = 1; i < 5; i++) {
//     console.log(i);
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// console.log("closure function");
// function logLater(i) {
//     setTimeout(function() {
//         console.log("timeout: " + i)
//         }, 1000
//     );
// };

// for (var i = 1; i < 5; i++) {
// 	console.log("forloop: " + i);
// //	setTimeout(function() {
// //		console.log("timeout" + i) 
// //		}, 1000
// //	)
// 	logLater(i);
// };

// ES6+ use of let block-scoped variable without additional functions
for (let i = 1; i < 5; i++) {
	console.log("forloop: " + i);
	setTimeout(function() {
		console.log("timeout: " + i) 
		}, 1000
	)
};

// eof