//HTML Variables
let currentIncorrectGuesses_span = document.getElementById("currentIncorrectGuesses"); //scoreboard incorrect guesses counter
let textOutput_span = document.getElementById("textOutput"); // white text
let correctGuessesWord_span = document.getElementById("correctGuessesWord"); // black text
let secretWord_input = document.getElementById("secretWord"); // secret word from input box
let letter_buttons = document.getElementById("buttonsContainerID").value;

//App Variables
let incorrectGuesses = 0; // counter placeholder for currentIncorrectGuesses_span
let secretWordArray;
let guessedLetters = [];

//Constants
const newGame_button = document.getElementById("newGameButton");
const words = {};
const maxIncorrectGuesses = 8;


// Start webpage modifiers
textOutput_span.innerHTML = 'Welcome to the game of Hangman! Type a secret word in text box to start. Only letters will be saved. ';//update white text

// Trigger a new game
newGame_button.addEventListener('click', function() {
  // words.secretWord = secretWord;
  words.secretWord = getAndCheckSecretWord();
  //set incorrect number and letter counters to 0 and display and previously guessed letters
  incorrectGuesses = 0;
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
    // update the text insert box (secret word input)
    secretWord_input.innerHTML = document.getElementById("secretWord").value = '';
    // update black text
    correctGuessesWord_span.innerHTML = '-'.repeat(secretWordArray.length);
    // update white text
    textOutput_span.innerHTML = `OK! Pick a letter.`
    // let validatedSecretWord = matches.join('').toLowerCase(); // lowercase string
    correctGuesses = '-'.repeat(secretWordArray.length);
    correctGuessesWord_span.innerHTML = correctGuesses;
    return secretWordArray.join('');
  }
};

const chooseLetter = function(letter) {
  guessedLetters.push(letter);

  if(isCorrectGuess(words.secretWord, letter)) {
    // hide chosen letter
    document.getElementById(letter).style.display = "none";
    // update blackText
    correctGuesses = updateCorrectGuesses(secretWordArray, letter, correctGuesses);
    // check if game is over
    if(isGameOver(words.secretWord, correctGuesses, incorrectGuesses)) return;
    // update whiteText
    textOutput_span.innerHTML = `You correctly guessed '${letter}', guess another letter!`;

  } else {
    // hide chosen letter
    document.getElementById(letter).style.display = "none";
    // increase scoreboard incorrect guesses by 1;
    incorrectGuesses++;
    currentIncorrectGuesses_span.innerHTML = incorrectGuesses;
    if (isGameOver(words.secretWord, correctGuesses, incorrectGuesses)) return;
    // update whiteText
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



//----------------------
// video player

//
// videoPlayer.js
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var videosArr = [
  { // 1 thinking about robbin bank
    height: '390',
    width: '640',
    videoId: 'bp6CYzCQCYw',
    playerVars: {
      'playsinline': 1,
      'start': 86,
      'end': 90,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  },
  { // 2 robbing bank
    height: '390',
    width: '640',
    videoId: 'bp6CYzCQCYw',
    playerVars: {
      'playsinline': 1,
      'start': 91,
      'end': 100,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  },
  { // 3 shoot with pan man
    height: '390',
    width: '640',
    videoId: 'bp6CYzCQCYw',
    playerVars: {
      'playsinline': 1,
      'start': 101,
      'end': 106,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  },
  { // 4 the first hanging after arrow to the neck
    height: '390',
    width: '640',
    videoId: 'bp6CYzCQCYw',
    playerVars: {
      'playsinline': 1,
      'start': 108,
      'end': 112,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  },
  { // 5 removed from tree,
    height: '390',
    width: '640',
    videoId: 'jyeyeJZmSGU',
    playerVars: {
      'playsinline': 1,
      'start': 1,
      'end': 67,
      'autoplay': 1
    },
    events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
    }
  },
  { // Maybe 6 In town trial
    height: '390',
    width: '640',
    videoId: 'jyeyeJZmSGU',
    playerVars: {
      'playsinline': 1,
      'start': 109,
      'end': 130,
      'autoplay': 1
    },
    events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
    }
  },
  { // 7 "first time?""
    height: '390',
    width: '640',
    videoId: 'jyeyeJZmSGU',
    playerVars: {
      'playsinline': 1,
      'start': 95,
      'end': 121,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  },
  { // 8 hood on then drop,
    height: '390',
    width: '640',
    videoId: 'bp6CYzCQCYw',
    playerVars: {
      'playsinline': 1,
      'start': 123,
      'end': 127,
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }
]

function onYouTubeIframeAPIReady() {
  // add looping function around here to loop each video in
  for (let i = 0; i < videosArr.length; i++) {
    videoObj = videosArr[i];
    player = new YT.Player('player', videoObj);
  }
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 12000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

// function clickA()
//       hover color
//       userChoice_div.classList.add('red-glow');

// On start game button click, run the playGame function