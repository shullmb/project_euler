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


lots of help from rosetta code... I am not a mathmetician.


COMPLETE
*/

function lrgPrime(num) {
		var origin = num;
		if (num <= 3){
			return(num);
		}
		var factors = [];
		var complete = false;
		while (!complete) {
			if (num%2 === 0){
				factors.push(2);
				num /= 2;
				continue;
			} 
			if (num%3 === 0){
				factors.push(3);
				num /= 3;
				continue;
			}
			if (num === 1){
				return factors;
			}
			var sqRoot = Math.sqrt(num);
			complete = true;
			for (var i = 6; i<= sqRoot; i += 6){
				if (num%(i-1) === 0){
					factors.push(i-1);
					num /= (i-1);
					complete = false;
					break;
				}
				if (num%(i+1) === 0){
					factors.push(i+1);
					num /= (i+1);
					complete= false;
					break;
				}
			}
		}
		factors.push(num);
		console.log(factors);
		console.log( "The largest prime factor of " + origin + " is " + factors[(factors.length -1)]);
}

lrgPrime(600851475143);

//Console logs:
// [71, 839, 1471, 6857]
//The largest prime factor of 600851475143 is 6857