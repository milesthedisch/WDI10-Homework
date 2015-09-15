console.log("hello")

// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.

// Create your range, starting at two and ending at the given limit.

// The algorithm consists of repeating the following over and over:

// take the next available unmarked number in your list (it is prime)
// remove all the multiples of that number (they are not prime)
// Repeat until you don't have any possible primes left in your range.

// When the algorithm terminates, all the numbers in the list that have not been removed are prime.

array = [];

var sOe = function(start, end, test) {
    for (var i = start; i <= end; i++) {
        array.push(i);
    }
}

var checkForPrime = function(array) {
    for (var i = 0; i < array.length - 1; i++) {

    }
}

console.log(sOe(1, 10))


var sieve = {

    createRange: function(start, end) {
        var arr = [];
        for (var i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr;
    }

    prime: function ( start, end ) {
    	var possible = this.createRange(start, end)
    	var primesArray = [];

    	while ( possible.length > 0 ) {
    		var prime = possible.shift();
    		primesArray.push( prime )
    		possible.filter( function (num) ) {
    			console.log( num )
    			return true;
    		}, prime );
    	}

    	return primesArray;
    }

}
