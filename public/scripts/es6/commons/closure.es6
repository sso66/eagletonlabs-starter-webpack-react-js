// closure.es6
console.log("w/ES6 let statement w/o closure function");
for (let j = 1; j < 5; j++) {
	console.log("for" + j);
	setTimeout(function() {
		console.log("timeout" + j) 
		}, 1000
	)
};

// favor es6 template literal over es5 string concat
console.log(`
prefer const over let, because const cannot be 
reassigned once declared\n`);

// eof