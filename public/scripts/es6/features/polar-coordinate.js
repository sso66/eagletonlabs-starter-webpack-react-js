// polar-coordinate.js
// Placing items evenly around a circle

function points(count, radius, offset = 0) {
  	console.log("count: " + count);
  	console.log("radius: " + radius);
  	console.log("offset: " + offset);
  
	//...................................................................
	// The points function also accepts optional 'offset' argument
	// to shift the points along the parameter of the circle.
	//...................................................................
	const angle = 360 / count;
	
	console.log("___ Procedural Programming ___"); 
	// To compute the angle for each point as: 
	for (let i = 0; i < count; i++) {
		console.log("angle = 360 * index / number of sides: "+ i + " - " + ( 360 * i / count));
	}
	
	console.log("___ Functional Programming ___");
  	const vertexIndices = range(count);
  
  	console.log("angle: " + angle);
  	console.log("vertexIndices: " + vertexIndices);
  
 	return vertexIndices.map(index => {
		return {
			
			//...................................................................
			// The Greek letter θ (theta) is often used to denote an angle, 
			// and a polar coordinate is conventionally referred to as (r, θ) 
			// instead of (x, y). 
			//
			// Thus, when dealing with polar coordinates,  we'll now use "theta" 
			// as the preferred variable name for the angle.
			//...................................................................
			
	      	theta: offset + degreesToRadians(offset + angle * index),
	      	r: radius,
	    };
  	});
}

// number => [0, 1, 2, ... number]
function range(count) {
	return Array.from(Array(count).keys());
}

function degreesToRadians(angleInDegrees) {
	console.log("angle: " + angleInDegrees)
  	return (Math.PI * angleInDegrees) / 180;
}


console.log(points(12, 300));
console.log("1. end of outermost circle of points")
console.log(points(12, 175, 15));
console.log("2. end of one inwards circle of points")
console.log(points(12, 150, 30));
console.log("3. end of the one after... circle of points")

// eof 
