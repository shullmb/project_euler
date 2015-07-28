/*
Project Euler
Problem 1
Multiples of 3 and 5

If we list all the natural numbers below 10 that are
 multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of 
 these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. 

*/

function multipleSum(upperBound) {
	var multiples = []; //just to see the multiples
	var collector = 0; //to determine sum
	for (var i=0; i < upperBound; i++) {
		if ( i%3===0 || i%5===0){
			collector+=i;
			multiples.push(i);
			}
	}
	console.log(collector);
	console.log(multiples);
	
}

multipleSum(1000);

