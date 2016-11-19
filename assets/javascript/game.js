
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;

var losses = 0;

var guesses = 10;

var guessArr = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		
		if (userGuess == computerGuess){
			wins++;
			alert("Winner! Winner! Chicken Dinner!");
			var img = document.createElement("img");			
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			console.log(computerGuess);
		}
		else{
			guessArr.push(userGuess);
			guesses+=-1;
			console.log(guessArr);
		}
		if (guesses == 0){
			alert("Too Bad! You Lose! Please Try Again!");;
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			guesses = 10;
			losses++;
			guessArr = [];
			console.log(computerGuess);
		}
		
		
		var html = "<h1>The Psychic Game</h1>" +
		"<p>Guess what letter I'm thinking of?" +
		"<p>Wins: " + 
		wins + 
		"</p>" +
		"<p>Losses: " + 
		losses + 
		"</p>" +
		"<p>Guesses Left: " + 
		guesses + 
		"</p>" +
		"Your guesses so far: " +
		guessArr;
		
		document.querySelector('#lettergame').innerHTML = html;
	
}

