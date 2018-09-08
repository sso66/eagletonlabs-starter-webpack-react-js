// arrow.js
// 10. Arrow functions: Callbacks and Anonymous
// Re: ES6 with Promises
// getUser(login)
//   .then(function (user) {
//     return getRights(user); // getRights is returning a promise
//   })
//   .then(function (rights) {
//     updateMenu(rights)
//   });

// getUser(login)
//   .then(user => getRights(user))
//   .then(rights => updateMenu(rights));
//
//   getUser(login)
//     .then(user => {
//       console.log(user);
//       return getRights(user)
//     })
//     .then(rights => updateMenu(rights));

// In ES5 // this won't work
// var maxFinder = {
//   max: 0,
//   find: function (numbers) {
//     // let's iterate
//     numbers.forEach(
//       function (element) {
//       // if the element is greater, set it as the max
//       if (element > this.max) {
//         this.max = element;
//       }
//     });
//   }
// }
// maxFinder.find([2, 3, 4]);
// log the result
// console.log("max value: " + maxFinder.max);
// Notice that the forEach in the find function uses 'this', but 'this' is not
// bound to an object. So this.max is no the mxo of maxFinder object.

// Use alias to fix it:
// var maxFinder = {
//   max: 0,
//   find: function (numbers) {
//     var self = this;
//     numbers.forEach(
//       function (element) {
//       if (element > self.max) {
//         self.max = element;
//       }
//     });
//   }
// }
// maxFinder.find([2, 3, 4]);
// // log the result
// console.log("max value: " + maxFinder.max);

// or binding the 'this or passing it as second parameter of the forEach function
//(as it was designed for)
// var maxFinder = {
//   max: 0,
//   find: function (numbers) {
//     // let's iterate
//     numbers.forEach(
//       function (element) {
//       // if the element is greater, set it as the max
//       if (element > this.max) {
//         this.max = element;
//       }
//     }, bind(this));
//   }
// }
// maxFinder.find([2, 3, 4]);
// // log the result
// console.log("max value: " + maxFinder.max);

//or passing it as second parameter of the forEach function
//(as it was designed for)
// var maxFinder = {
//   max: 0,
//   find: function (numbers) {
//     // let's iterate
//     numbers.forEach(
//       function (element) {
//       // if the element is greater, set it as the max
//       if (element > this.max) {
//         this.max = element;
//       }
//     }, this);
//   }
// }
// maxFinder.find([2, 3, 4]);
// // log the result
// console.log("max value: " + maxFinder.max);

// An elegant solution with the arrow function syntax:
const maxFinder = {
  max: 0,
  find: function (numbers) {
    // let's iterate
    numbers.forEach(element => {
      // if the element is greater, set it as the max
      if (element > this.max) {
        this.max = element;
      }
    });
  }
};
maxFinder.find([2, 3, 4]);
// log the result
console.log("max value: " + maxFinder.max);
// This make the arrow functions the perfect candidates for anonymous
// functions in callbacks!
// eof
