 // destructure.js
 
 let a = 1;
 let b = 2;
 let c = 3;
 
 [a, b, c] = [c, b, a];

console.log([a, b, c]) 
console.log(a)
console.log(b)
console.log(c)
console.log([c, b,a]) 
console.log(c)
console.log(b)
console.log(a)


function topThree([first, second, third]) {
	return {
		first: first,
		second: second,
		third: third,
	}
}

console.log(topThree([89, 92, 98]));

 // eof
 
 function sayMyName({
 	firstName = 'Stephen',
 	lastName = 'Oo'
 } = {}) {
 	console.log(firstName + ' ' + lastName)
 }
 
 sayMyName();
 sayMyName({firstName: 'Stephen'})
 sayMyName({firstName: 'Karen', lastName: 'Oo'});
 
// eof 