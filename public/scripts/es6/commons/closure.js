// closure.js
function logLater(i) {
	setTimeout(function() {
		console.log("timeout" + i); 
		}, 1000
	);
};

for (var i = 1; i < 5; i++) {
	console.log("forloop" + i);
//	setTimeout(function() {
//		console.log("timeout" + i) 
//		}, 1000
//	)
	logLater(i);
};
// eof