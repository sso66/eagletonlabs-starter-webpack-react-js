// closure.js
for (var i = 1; i < 5; i++) {
	console.log("for" + i);
//	setTimeout(function() {
//		console.log("timeout" + i) 
//		}, 1000
//	)
	logLater(i);
};

function logLater(i) {
	setTimeout(function() {
		console.log("timeout" + i); 
		}, 1000
	);
};

// eof