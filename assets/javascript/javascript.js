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
  hint.textContent = selectHint(pickedWord);
}

function replaceChar(str, index, chr) {
  str = str.split("");
  str[index] = chr;
  str = str.join("");
  return str;
}

function selectHint(str) {
  // Switch case to determine hint
  switch (str) {
    case "AUSTIN":
      str = "The Live Music Capital of the World";
      break;
    case "BARCELONA":
      str = "I am regarded as the City of Counts";
      break;
    case "BERLIN":
      str = "Once separate, I was reunified in 1990";
      break;
    case "BEIJING":
      str = "Formerly romanized as 'Peking'";
      break;
    case "CHICAGO":
      str = "The Windiest City in the Midwest";
      break;
    case "ISTANBUL":
      str = "This city is geographically located in both Europe and Asia";
      break;
    case "LOS ANGELES":
      str = "The City of Angels";
      break;
    case "LONDON":
      str = "Things have cleared up, but I was once known as The Smoke";
      break;
    case "MINNEAPOLIS":
      str = "A miniature apple to the eye";
      break;
    case "MOSCOW":
      str = "My fortress stands upon a Red Square";
      break;
    case "NEW YORK":
      str = "I am the City that Doesn't Sleep";
      break;
    case "PARIS":
      str = "I am sometimes known as the City of Light";
      break;
    case "PORTLAND":
      str = "The Dream of the 90s is alive in...";
      break;
    case "SAN FRANCISCO":
      str = "I am the heart of the Silicon Valley";
      break;
    case "SEATTLE":
      str = "I am sometimes known as the Emerald City";
      break;
    case "SEOUL":
      str = "I am twise as dense as New York, but that is not what makes me 'Special'";
      break;
    case "TOKYO":
      str = "In another period of time, I was Edo";
      break;
    case "TORONTO":
      str = "I'm often mistaken as the capital of my country, eh?";
      break;
    case "VIENNA":
      str = "I am regarded as the City of Music";
      break;
    case "WACO":
      str = "Sic 'Em Bears!";
      break;
  }
  return str;
}

document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    selectedKey = event.key.toUpperCase();
    if (lettersGuessed.includes(selectedKey)) {
      console.log(
        "You cannot send " + selectedKey + " because it has already been used"
      );
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
      winCondition();
    } else if (tries === 0) {
      messagePrompt.style.display = "block";
      loseCondition();
    }
  }
};

function winCondition() {
  document.onkeyup = null;
  displayMessage.textContent = "Congratulations, you won! Refresh the page to play again.";
  // guess == pickedWord
  // congrats you won!
}

function loseCondition() {
  document.onkeyup = null;
  displayMessage.textContent = "I'm sorry, but you lose. Refresh the page to play again.";

}