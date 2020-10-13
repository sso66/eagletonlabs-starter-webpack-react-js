// module.js
// Scope: global
var me = 'Stephen'

// Function
function sayMe() {
  	// Scope: local
  	var me = 'Karen'
	
	return me
}	

// Context
console.log(me);
console.log(sayMe())

// eof