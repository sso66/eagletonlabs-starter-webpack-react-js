// Greeter-node.js
var content = require('./Greet.json');

module.exports = function() {
  var greet = document.createElement('h1');
  //greet.textContent = "Hi there and greetings!"; 
  greet.textContent = content.greetText; 
   
  return greet;
};
// eof