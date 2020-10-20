// rest.es6

// function
function packTheRest(...numbers) {
	return numbers[0] + numbers[1] + numbers[2];
}

//const packTheRest = (...numbers) => numbers.reduce((x, y) => x + y, 0);

// scope
let a = 1, b = 2, c = 3;

// context
console.log(packTheRest(a, b, c));

// eof