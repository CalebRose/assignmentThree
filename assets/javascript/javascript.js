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
var alreadyGuessed = document.getElementById("alreadyGuess");
var displayTries = document.getElementById("displayTries");
var displayLetters = document.getElementById("lettersUsed");
var hint = document.getElementById("hint");
var messagePrompt = document.getElementById("messagePrompt");
var displayMessage = document.getElementById("message");
var wordsArray = [
  "AUSTIN",
  "BARCELONA",
  "BERLIN",
  "BEIJING",
  "CHICAGO",
  "ISTANBUL",
  "LOS ANGELES",
  "LONDON",
  "MINNEAPOLIS",
  "MOSCOW",
  "NEW YORK",
  "PARIS",
  "PORTLAND",
  "SAN FRANCISCO",
  "SEATTLE",
  "SEOUL",
  "TOKYO",
  "TORONTO",
  "VIENNA",
  "WACO"
];
var hintMessage = {
  AUSTIN: "The Live Music Capital of the World",
  BARCELONA: "I am regarded as the City of Counts",
  BERLIN: "Once separate, I was reunified in 1990",
  BEIJING: "Formerly romanized as 'Peking'",
  CHICAGO: "The Windiest City in the Midwest",
  ISTANBUL: "This city is geographically located in both Europe and Asia",
  "LOS ANGELES": "The City of Angels",
  LONDON: "Things have cleared up, but I was once known as The Smoke",
  MINNEAPOLIS: "A miniature apple to the eye",
  MOSCOW: "My fortress stands upon a Red Square",
  "NEW YORK": "I am the City that Doesn't Sleep",
  PARIS: "I am sometimes known as the City of Light",
  PORTLAND: "The Dream of the 90s is alive in...",
  "SAN FRANCISCO": "I am the heart of the Silicon Valley",
  SEATTLE: "I am sometimes known as the Emerald City",
  SEOUL:
    "I am twise as dense as New York, but that is not what makes me 'Special'",
  TOKYO: "In another period of time, I was Edo",
  TORONTO: "I'm often mistaken as the capital of my country, eh?",
  VIENNA: "I am regarded as the City of Music",
  WACO: "Sic 'Em Bears!"
};
var pickedWord = "";
var guess;
var tries = 0;
var lettersGuessed = [];
var guessCounter = 0;
let selectedKey = "";
var lastWord = "";

setUpGame();

function setUpGame() {
  guess = "";
  pickedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  for (var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] == " ") {
      guess += " ";
    } else guess += "_";
  }
  tries = 5;
  displayTries.textContent = tries.toString();
  lettersGuessed = [];
  displayGuessTag.textContent = guess;
  displayLetters.textContent = lettersGuessed;
  hint.textContent = "Hint: " + hintMessage[pickedWord];
  alreadyGuessed.textContent = "";
}

function replaceChar(str, index, chr) {
  str = str.split("");
  str[index] = chr;
  str = str.join("");
  return str;
}

document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    selectedKey = event.key.toUpperCase();
    if (lettersGuessed.includes(selectedKey)) {
      alreadyGuessed.textContent =
        "You cannot send " + selectedKey + " because it has already been used.";
      return;
      //selectedKey = ""; // I can either change this to a !not and include the rest of the function in here, or leave as is.
    }
    for (var i = 0; i < pickedWord.length; i++) {
      //selectedKey = selectedKey.toUpperCase();
      if (selectedKey == pickedWord[i]) {
        guess = replaceChar(guess, i, selectedKey);
      } else {
        guessCounter++;
        if (guessCounter == pickedWord.length) {
          tries--;
          if (tries === 0) {
            loseCondition();
          }
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
      messagePrompt.style.display = "block";
      removeWordFromArray();
      if (wordsArray.length === 0) {
        winCondition();
      } else setUpGame();
    }
  }
};

function removeWordFromArray() {
  lastWord = pickedWord;
  displayMessage.textContent = "Last word: " + lastWord;
  wordsArray = wordsArray.filter(e => e !== pickedWord);
}

function winCondition() {
  document.onkeyup = null;
  displayMessage.textContent =
    "Congratulations, you won! Refresh the page to play again.";
  // guess == pickedWord
  // congrats you won!
}

function loseCondition() {
  document.onkeyup = null;
  messagePrompt.style.display = "block";
  displayMessage.textContent =
    "I'm sorry, but you lose. Refresh the page to play again.";
}
