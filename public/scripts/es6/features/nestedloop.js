// File: nestedloop.js
// Note: understanding nested loop in JavaScript teardown
// Date: 02/02/2022
//------------------------------------------------------------------------------
// ___ closure __
(function() {
		 
	for ( var outerloop = 1; outerloop < 5; outerloop++ )
	{
		console.log("outerloop-->" + outerloop);
		
		//for ( var innerloop = 1; innerloop <= outerloop;  innerloop++ ) 
		for ( var innerloop = 1; innerloop <= 4;  innerloop++ )
		{
			console.log("<--innerloop: " + innerloop);
		}
		console.log("outerloop-->"+(outerloop+1));
	}
})();

/**************************************************
$ node nestedloop

// ___innerloop dependent on outerloop___
outerloop-->1
<--innerloop: 1
outerloop-->2
<--innerloop: 1
<--innerloop: 2
outerloop-->3
<--innerloop: 1
<--innerloop: 2
<--innerloop: 3
outerloop-->4
<--innerloop: 1
<--innerloop: 2
<--innerloop: 3
<--innerloop: 4

//___innerloop independent of outerloop___
outerloop-->1
<--innerloop: 1
<--innerloop: 2
<--innerloop: 3
<--innerloop: 4
outerloop-->2
outerloop-->2
<--innerloop: 1
<--innerloop: 2
<--innerloop: 3
<--innerloop: 4
outerloop-->3
outerloop-->3
<--innerloop: 1
<--innerloop: 2
<--innerloop: 3
<--innerloop: 4
outerloop-->4
outerloop-->4
<--innerloop: 1
<--innerloop: 2
<--innerloop: 3
<--innerloop: 4
outerloop-->5
**************************************************/
