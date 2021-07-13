// define alphabetFull
const alphabetFull = 'abcdefghijklmnopqrstuvwyxz';

// define guessesObj - need to add secretWord
let guessesObj = {
  available: 'a b c d e f g h i j k l m n o p q r s t u v w x y z',
  incorrectGuesses: '',
};

let incorrectGuesses_div = document.getElementById("incorrect-guesses");
let correctGuesses_div = document.getElementById("correct-guesses");


function getUserInput() {
  let userInput = document.getElementById("myText").value;
  return userInput
}

// takes input from text box
function submitInput() {
  var x = document.getElementById("myText").value; // sets x to the value in text box on click
  document.getElementById("User-input").innerHTML = x; // changes id "user-input" to x in HTML file
};

// Main function
function playGame(theGuessesObj) {
// ask for player names
//const host = prompt('Initial host, what is your name?');
//const guesser = prompt('Initial guesser, what is your name');

  // define missCounter
  let missCounter = 0;

  // Get secretWord
  let secretWord = askForSecretWord(checkWord);

  // add correctGuesses to guessesObj
  guessesObj['correctGuesses'] = '_'.repeat(secretWord.length);

  // Ask for guess if game is not over
  while (!isGameOver(guessesObj, secretWord, guesser)) {
    let guessLetter = takeGuess(guessesObj['available'], guesser);
    // Update guessesObj.available string
    guessesObj['available'] = guessesObj['available'].replace(guessLetter, ' ');
    // if correct guess, update guessesObj.correctGuesses
    if (secretWord.includes(guessLetter)) {
      guessesObj['correctGuesses'] = updateCorrect(guessLetter, secretWord, guessesObj);
    } else {
      missCounter++;
      guessesObj = updateIncorrect(guessLetter, guessesObj);
      scaffold = updateScaffold(missCounter, scaffold);
    };
    console.log(scaffold);
    console.log(guessesObj);
  }; //close while

  console.log(`The secret word is ${secretWord}`);
  let anotherGame = prompt(`Do you want to play again? (y/n)`).toString();
  while (anotherGame !== 'y' && anotherGame !== 'n') {
    console.log('Enter a valid response (y/n)');
    anotherGame = prompt(`Do you want to play again? (y/n)`).toString();
  }

  if (anotherGame === 'y') {
    console.clear();
    console.log('New Game!')
    playGame({
              available: 'a b c d e f g h i j k l m n o p q r s t u v w x y z',
              incorrectGuesses: '',
    });
  }
    else {
    console.log('Goodbye!');
  };
}; // end playGame function


// // Ask Host for word input and save as a variable
function askForSecretWord(callbackFunction, /*input from text box */) {
  //input: checkWord (callbackFunction)
  //output: guessWord
  let tempGuessWord = // input from textbox ;
  tempGuessWord.toString().toLowerCase();
  while (callbackFunction(tempGuessWord) === false) {
    tempGuessWord = //input from textbox;
    tempGuessWord.toString().toLowerCase();
  }
  return tempGuessWord;
}; // end askForSecretWord

function checkWord(wordToCheck) {
  //input: tempGuessWord
  //output: isWordValid
  let isWordValid = true;
  if (wordToCheck.length === 0) {
    isWordValid = false;
    return isWordValid;
  }
  for (let i = 0; i < wordToCheck.length; i++) {
    let letter = wordToCheck[i];
    if (alphabetFull.includes(letter)) {
    } else {
      isWordValid = false;
      return isWordValid;
    };
  };
  return isWordValid;
}; // end checkWord









      // Done make playlist with each clip or many clips from same video
      // autoplay each clip
      // Done stop clip after approx. 6 seconds
      // cycle to the next clip upon wrong answer
      // autoplay next clip
      // reset for each new game


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