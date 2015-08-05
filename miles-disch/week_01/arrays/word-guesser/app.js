/*
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
*/

var letters = ['f','o','x'];
var lettersGuessed = ['_','_','_'];

var guessLetter = function ( plyrLetter ) {
	var goodGuess = false;
	var moreToGuess = false;
	for (i = 0; i < letters.length; i++) {
		if ( letters[i] === plyrLetter ) {
			lettersGuessed[i] = plyrLetter;
			goodGuess = true;			

		} else if ( lettersGuessed[i] === '_' ){
			moreToGuess = true;

		} 
	}
	if (goodGuess) {
		console.log('you got one right!');
		console.log(lettersGuessed.join(''));
		if(!moreToGuess){
			console.log('you won!')
		} 
	}
	else {
		console.log("that not correct!")
	}
 	
}