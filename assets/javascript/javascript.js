/*
    HangMan Game

    Requirements:
    Theme
    Array for list of words to guess
    Randomizer to PICK the word from array
    array to display as many "_"'s as there are letters in the word
    - Either allow the player to use the keyboard to guess letters
    - Or have all 26 letters out for the player to click
    var lifeCounter;
    var letterCounter;
    Function(whenever player picks a letter) {
        letterCounter = 0; // Resets after every click
        for(var i = 0; i < word.length; i++){
            if (word[i] == letter){
                currentWord[i] = letter;
            }
            else{
                lettercounter++;
                if(lettercounter == word.length{
                    lifecounter--;
                    chancesLeft--;
                    letterCounter = 0;
                }
            }
        }
        (if using buttons, disable the letter)
        if(currentWord == word){
            // Change Page to say You Win!
            // Offer chance to play again.
        }
        if(chancesLeft == 0){
            // Change Document to say Game Over!
        }
    }


    document.write() can be used to write all of the code onto the page.
*/

var displayGuessTag = document.getElementById("displayGuess");
var wordUsed = document.getElementById("wordUsed");
var displayTries = document.getElementById("displayTries");
var displayLetters = document.getElementById("lettersUsed");
var wordsArray = [
  "Austin",
  "Barcelona",
  "Berlin",
  "Beijing",
  "Moscow",
  "Paris",
  "London",
  "Minneapolis",
  "Chicago",

  "Toronto",
  "Tokyo",
  "Vienna",
  "Istanbul",

  "Seoul",
  "Waco"
];
var pickedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var guess = "";
var tries = 0;
var lettersGuessed = [];
var guessCounter = 0;
let selectedKey = "";

setUpGame();

function setUpGame() {
  for (var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] == " ") {
      guess += " ";
    } else guess += "_";
  }
  tries = 10;
  displayTries.textContent = tries.toString();
  lettersGuessed = [];
  displayGuessTag.textContent = guess;
  displayLetters.textContent = lettersGuessed;
}

function replaceChar(str, index, chr) {
  str = str.split("");
  str[index] = chr;
  str = str.join("");
  return str;
}

document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    selectedKey = event.key;
    if (lettersGuessed.includes(selectedKey)) {
      console.log(
        "You cannot send " + selectedKey + " because it has already been used"
      );
      return;
      //selectedKey = ""; // I can either change this to a !not and include the rest of the function in here, or leave as is.
    }
    for (var i = 0; i < pickedWord.length; i++) {
      if (i === 0) selectedKey = selectedKey.toUpperCase();
      else selectedKey = selectedKey.toLowerCase();
      if (selectedKey == pickedWord[i]) {
        guess = replaceChar(guess, i, selectedKey);
      } else {
        guessCounter++;
        if (guessCounter == pickedWord.length) {
          tries--;
        }
      }
    }
    guessCounter = 0;
    displayGuessTag.textContent = guess;
    displayTries.textContent = tries.toString();
    if (!lettersGuessed.includes(selectedKey)) {
      lettersGuessed.push(selectedKey);
    }
    displayLetters.textContent = lettersGuessed.toString();
    if (guess === pickedWord) {
      winCondition();
    } else if (tries === 0) {
      loseCondition();
    }
  }
};

function winCondition() {
  document.onkeyup = null;
  // guess == pickedWord
  // congrats you won!
}

function loseCondition() {
  document.onkeyup = null;
}
