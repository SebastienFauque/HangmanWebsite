// define variables
const newGame_button = document.getElementById("newGameButton");

const maxIncorrectGuesses = 8;
let currentIncorrectGuesses = 0;
let turnCounter = 0;
var correctGuessesWord_span = document.getElementById("correctGuessesWord");
const textOutput_span = document.getElementById("textOutput");
const currentIncorrectGuesses_span = document.getElementById("currentIncorrectGuesses");
let secretWord_input = document.getElementById("secretWord").value;
const testAlpha_button = document.getElementById("testAlpha").value;
// // // // // // // //

//*******************************************
// VERIFIED AS DONE
// listen for new game button clic
newGame_button.addEventListener('click', function() {
  console.log('new game button has been pressed')
  const secretWordResult = getAndCheckSecretWord(); // array
  //let gameState =
  updateBlackText(secretWordResult, )
  return secretWordResult;
});

//keep
function getAndCheckSecretWord() {
  //accepts only letters
  secretWord_input = document.getElementById("secretWord").value;
  const regex = /[A-Za-z]/gi;
  let matches = secretWord_input.match(regex)
  console.log(matches); // array
  if (matches === null) {
    textOutput_span.innerHTML = `The entered word ${matches} was not correct, insert a new word and click "New Game".`
  } else if (matches.length) {
    textOutput_span.innerHTML = `OK! Pick a Letter.`
    return matches.toLowerCase(); // lowercase array
  }
};

const updateBlackText = function(secretWordResult, letter, correctGuessesWord_span, turnCounter) {
  // set the initial black text
  if (turnCounter === 0) {
    // fill black text with underscores
    correctGuessesWord_span.innerHTML = new Array(secretWordResult.length).fill('_');
  }

  if (secretWordResult.includes(letter)) {
      //find all indexes of that letter in secret word.
      // initialize targetLetterIndexes
      let targetLetterIndexes = [];
      //filter sercretWordResult Array for the indexes of the target letter
      secretWordResult.filter((wordLetter, index) => {
        if (wordLetter === letter) {
          targetLetterIndexes.push(index);
      }
      })
      // change the black text to show the found letters
      correctGuessesWord_span = correctGuessesWord_span.replace('_', targetLetterIndexes)
  }
}

// ***************************************************

//Press 'New Game' button
  //Start the main game function or restart a game.
    //Set constant secretWord equal to call  of 'getSecretWordFunction' (no inputs).
      //Change white text to "submit a secret word and press submit".
      //On 'submit' button press, clear the secret word input box.
      //If secret word is valid.
        //Return secretWord.
      //else secretWord is not valid.
        //Return the function call on 'getSecretWordFunction' again.

  //Make variable gameState = 'string' (correctGuess (currentBlackText === secretWord), incorrectGuess, win, lose)

    //Make guessesObj
      //secretword: the 'secretWord'
      //initalBlackText: new Array(secretWord.length).fill('-');
      //currentBlackText: intial value for currentBlackText is 'intialBlackText'
        // and will be updated at each letter button click
      //incorrectGuesses: all incorrect guesses (essentially a missed guess counter)
      //allLettersGuessed: all letters guesses (essentially a turn counter)

      // helper function displayBlackText(gameState)
        //Conditional gameState correct guess:
          //Display guessesObj[currentBlackText]
        //Conditional gameState incorrect guess: do nothing.

      // helper function displayWhiteText(gameState)
        //Say 'Pick a letter'
        //Say conditional: 'Good Guess, guess another letter'
        //Say conditional: 'Incorrect guess, guess another letter'
        //Say conditional: 'You win!'
        //Say conditional: 'You lose!'
      // helper function grayOutLetterButton

      //Function called if letterButtonIsPressed('letter')
        //If letter is in secretWord.
          // get indexes in secretWord
          // update gameState variable
            //update guessesObj[currentBlackText] with 'letter' by placing
            // the letter at each index in currentBlackText
            //Call helper function displayBlackText(gameState)
            //Call helper function displayWhiteText(gameState)
            //Call helper function grayOutLetterButton
        //if letter not in secretWord
          // update gameState variable
          //iterate incorrect guesses counter with incorrect letter
          //Update currentIncorrectGuesses variable and display it
          //iterate videoPlayer
          //Call helper function displayWhiteText
          //Call helper function grayOutLetterButton









const chooseLetter = function(letter) {
  // check if letter is in secretWord
  // return true/false
  console.log('letter', letter)
  return letter;
}


//isLetterInSecretWord === true:
  //update the black text
  //



// function updateWhiteText(gameState) {
//   console.log('in updateWhiteText');
//   switch(gameState) {
//     case 'started':
//       textOutput_span.innerHTML = "Game started, pick a letter";
//       break;
//     case win:
//       textOutput_span.innerHTML = "Good job, you won!!";
//       break;
//     case lose:
//       textOutput_span.innerHTML = "He's dead, Jim";
//       break;
//     case correct:
//       textOutput_span.innerHTML = "Nice guess, pick another letter";
//       break;
//     case incorrect:
//       textOutput_span.innerHTML = "Oooh darn, pick another letter";
//       break;
//   }

// }







// // get input from html file
// function startNew() {
//   secretWord = secretWord.toLowerCase();
//   let underscoresLength = secretWord.length();
//   console.log('secret word: ', secretWord_input)
//   return secretWord;
// }














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