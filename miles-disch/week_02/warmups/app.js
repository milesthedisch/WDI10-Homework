//Write a program that, given a word and a list of possible anagrams, selects the correct one(s).

//In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlet
	
	var words = ["enlists", "google", "inlets", "banana"]
	var wordsSplit = [];
	
	var wordChecker = function ( string ) {
		for ( i = 0; i < string.length; i++ ) {

		}
	}

	var wordSpliter = function ( words ) {
		for (i = 0; i < words.length; i++ ) {
			var splitWord = words[i].split();
			wordsSplit.push(splitWord);
		}
	}



var Anagram = {
	sortAb: function ( word ) {
		return word.split("").sort().join("");
	},
	theEqualizer: function ( setWord, guessWord ) {
		setWord = setWord.toLowerCase()
		guessWord = guessWord.toLowerCase()
		return (this.sortAb(guessWord)) === (this.sortAb(setWord))
	},
	areAnagrams: function (setWord, guessWord) {
		return setWord !== guessWord && this.theEqualizer( setWord, guessWord ) 
	},
	matches: function ( word, potentialAnagrams ) {
		var anagrams = [];
		for ( var i = 0; i < potentialAnagrams.length; i++ ) {
			var currentWord = potentialAnagrams[i]
			if ( this.areAnagrams(word, currentWord) ) {
				anagrams.push( currentWord );
			} 
		} 

		return anagrams;
	}
}
