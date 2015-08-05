/*
Problem 3
Largest Prime Factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

input: integer n;
output: integer m;

If n is prime
	return "the number is prime"
Else
	determine prime factors of n
	return largest	





INCOMPLETE
*/

function lrgPrime(num) {
		var factors = [];
		var denom = 2;
		while (num%denom === 0) {
			factors.push(denom);
			num/=denom;
		}
		console.log(factors);
		console.log(Math.max(factors));
}

lrgPrime(10001);