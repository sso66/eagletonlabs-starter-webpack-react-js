// index.node.js
console.log("Starting index.node.js...");

var greeter = require('./components/Greeter.node.js');
document.getElementById('root').appendChild(greeter());
// eof 
