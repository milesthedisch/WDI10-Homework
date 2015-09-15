$( document ).ready(function() {
	var sqr = function ( a ) {
		return a * a;	
	}
	
	var sqrNumberFrom = function ( numbersFrom ) {
		var sumOfSqrs = 0;
		for ( var i = 1; i <= numbersFrom; i++  ) {
			console.log(sumOfSqrs = sqr(i) + sumOfSqrs);
		}	
	} 
	console.log(sqrNumberFrom(10));

	var sqrNtrl = function ( aBunchOfWholeNumbers ) {
		var numbersAdded = 0;
		for ( var x = 0; x <= aBunchOfWholeNumbers; x++ ) {
			console.log(numbersAdded += x);
		}
		return sqr(numbersAdded) 
	}
	
	console.log(sqrNtrl(10));

});