//HTML Variables
let currentIncorrectGuesses_span = document.getElementById("currentIncorrectGuesses"); //scoreboard incorrect guesses counter
let textOutput_span = document.getElementById("textOutput"); // white text
let correctGuessesWord_span = document.getElementById("correctGuessesWord"); // black text
let secretWord_input = document.getElementById("secretWord"); // secret word input box
let letter_buttons = document.getElementById("buttonsContainerID").value;

//App Variables
let incorrectGuesses = 0;
let secretWordArray;
let guessedLetters = [];

//Constants
const newGame_button = document.getElementById("newGameButton");
const words = {};
const maxIncorrectGuesses = 8;
const prefix = 'https://www.youtube-nocookie.com/embed/';
const movieIds = ['bp6CYzCQCYw',
                  'bp6CYzCQCYw',
                  'qyqBAYCECZU',
                  'bp6CYzCQCYw',
                  'bp6CYzCQCYw',
                  'hbEbD1Z_tNQ',
                  'hbEbD1Z_tNQ',
                  'hbEbD1Z_tNQ'
                ];
const suffixList = ['?&autoplay=1&start=86&end=90&modestbranding=1',
                    '?&autoplay=1&start=91&end=100&modestbranding=1',
                    '?&autoplay=1&start=35&end=65&modestbranding=1',
                    '?&autoplay=1&start=101&end=107&modestbranding=1',
                    '?&autoplay=1&start=108&end=112&modestbranding=1',
                    '?&autoplay=1&start=0&end=15&modestbranding=1',
                    '?&autoplay=1&start=31&end=45&modestbranding=1',
                    '?&autoplay=1&start=65&end=75&modestbranding=1'
                  ];



// Start webpage modifiers
textOutput_span.innerHTML = 'Welcome to the game of Hangman! Type a secret word in text box to start. Only letters will be saved. ';//update white text
document.getElementById('player').style.display = "none";

// Trigger a new game
newGame_button.addEventListener('click', function() {
  words.secretWord = getAndCheckSecretWord();
  //set incorrect number and letter counters to 0 and display and add previously guessed letters
  incorrectGuesses = 0;
  currentIncorrectGuesses_span.innerHTML = incorrectGuesses;
  document.getElementById('player').style.display = "";
  document.getElementById('buttonsContainerID').style.display = "";
  guessedLetters.forEach((elem) => {document.getElementById(elem).style.display = "";})
  guessedLetters = [];
  return;
});


function getAndCheckSecretWord() {
  const givenSecretWord = document.getElementById("secretWord").value.toLowerCase();
  secretWordArray = givenSecretWord.match(/[A-Za-z]/gi);

  if (secretWordArray === null || secretWordArray === undefined) {
    textOutput_span.innerHTML = `The entered word '${givenSecretWord}' was not valid, insert a new word and click "New Game".`
    return;
  } else if (secretWordArray.length) {
    secretWord_input.innerHTML = document.getElementById("secretWord").value = '';
    // update black text
    correctGuessesWord_span.innerHTML = '-'.repeat(secretWordArray.length);
    // update white text
    textOutput_span.innerHTML = `OK! Pick a letter.`
    correctGuesses = '-'.repeat(secretWordArray.length);
    correctGuessesWord_span.innerHTML = correctGuesses;
    return secretWordArray.join('');
  }
};

const chooseLetter = function(letter) {
  guessedLetters.push(letter);

  if(isCorrectGuess(words.secretWord, letter)) {
    document.getElementById(letter).style.display = "none";
    // update blackText
    correctGuesses = updateCorrectGuesses(secretWordArray, letter, correctGuesses);
    if(isGameOver(words.secretWord, correctGuesses, incorrectGuesses)) {
      document.getElementById('player').src = 'https://www.youtube-nocookie.com/embed/04854XqcfCY?start=38&end=77&autoplay=1&modestbranding=1';
      return;
    }
    textOutput_span.innerHTML = `You correctly guessed '${letter}', guess another letter!`;
  } else {
    //set up and play next video
    document.getElementById('player').src = prefix+movieIds[incorrectGuesses]+suffixList[incorrectGuesses];
    document.getElementById(letter).style.display = "none";
    incorrectGuesses++;
    currentIncorrectGuesses_span.innerHTML = incorrectGuesses;

    if (isGameOver(words.secretWord, correctGuesses, incorrectGuesses)) return;
    textOutput_span.innerHTML = `You incorrectly guessed '${letter}', guess another letter!`;
  }

  return;
}

function isGameOver(secretWord, correctGuesses, incorrectGuesses) {
  if (secretWord === correctGuesses) {
    textOutput_span.innerHTML = `You correctly guessed ${secretWord}! You Win! Enter a word and press 'New Game' to play again.`;
    document.getElementById('buttonsContainerID').style.display = "none";
    return true;

  } else if (incorrectGuesses >= maxIncorrectGuesses) {
    textOutput_span.innerHTML = `You've ran out of guesses while trying to guess ${secretWord}. Your hangman is dead. You lose... Enter a word and press 'New Game' to play again.`;
    correctGuessesWord_span.innerHTML = `Game Over`;
    document.getElementById('buttonsContainerID').style.display = "none";
    return true;

  } else {
    return false;
  }
}

function isCorrectGuess(secretWordArray,letter) {
  return secretWordArray.includes(letter);
}

function updateCorrectGuesses(secretWordArray, letter, correctGuesses) {
  secretWordArray.forEach((element, index) => {
    if (element === letter) {
      correctGuessesArray = correctGuesses.split('');
      correctGuessesArray[index] = letter;
      correctGuesses = correctGuessesArray.join('');
    }
  })
  correctGuessesWord_span.innerHTML = correctGuesses;
  return correctGuesses;
}