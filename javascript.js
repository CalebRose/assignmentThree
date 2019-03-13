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
*/