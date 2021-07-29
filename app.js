// define variables
const newGame_button = document.getElementById("newGameButton");

let currentIncorrectGuesses = 0;
var correctGuessesWord_span = document.getElementById("correctGuessesWord");
const textOutput_span = document.getElementById("textOutput");
const currentIncorrectGuesses_span = document.getElementById("currentIncorrectGuesses");
let secretWord_input = document.getElementById("secretWord").value;
//const secretWord = document.getElementById("secretWord").value;

// let guessesObj = {
//   available: 'a b c d e f g h i j k l m n o p q r s t u v w x y z',
//   incorrectGuesses: '',
// };


// listen for new game button click
newGame_button.addEventListener('click', function() {
  console.log('new game button has been pressed')
  let gameState = started
  getSecretWord();
  //Uncomment once game function is made
  // game()
});

function getSecretWord(){
  secretWord_input = document.getElementById("secretWord").value;
  let unverifiedSecretWord = secretWord_input
  return unverifiedSecretWord;
}

// UNIT TEST: getSecretWord
console.log(getSecretWord() === 'abcd') // true; if 'abcd' entered into text input box


// function updateWhiteText(gameState) {
//   console.log('in updateWhiteText');
//   switch(gameState) {
//     case started:
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
//     case correct:
//       textOutput_span.innerHTML = "Oooh darn, pick another letter";
//       break;
//   }

// }




function isSecretWordValid() {


  //delete non regex chars of input
  const regex = /[^a-z]/gi; // use userInput.match(regex);


}


// get input from html file
function startNew() {

  secretWord = secretWord.toLowerCase();
  let underscoresLength = secretWord.length();
  console.log('secret word: ', secretWord_input)
  return secretWord;
}














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